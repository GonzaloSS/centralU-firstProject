# -*- coding: utf-8 -*-

from odoo import models, fields, api


class InventoryLine(models.Model):
    _name = 'stock.inventory'
    _inherit = 'stock.inventory'
    
    inventory_employee = fields.Many2one('res.users', string='Responsable',required=True, ondelete="cascade" )


    @api.model
    def create(self, vals):
        # Prevent double project creation
        self = self.with_context(mail_create_nosubscribe=True)
        project = super(InventoryLine, self).create(vals)
        nuevo1 = self.env['project.project'].create({
            'name' : vals['name']

        })
        nuevo2 = self.env['project.task.type'].create({
            'project_ids': [nuevo1.id],
            'name' : "Por hacer"

        })
        nuevo3 = self.env['project.task.type'].create({
            'project_ids': [nuevo1.id],
            'name' : "Haciendo"

        })
        nuevo4 = self.env['project.task.type'].create({
            'project_ids': [nuevo1.id],
            'name' : "En revisión"

        })
        nuevo5 = self.env['project.task.type'].create({
            'project_ids': [nuevo1.id],
            'name' : "Hecho"

        })

        inventory_rec = self.env['stock.inventory'].search([('name', '=', vals['name'])])
        for inventory in inventory_rec:
            inventoryLine_rec = self.env['stock.inventory.line'].search([('inventory_id', '=',inventory.id),('product_id','=',inventory.product_ids.ids)])
            if inventoryLine_rec:
                for inventoryLine in inventoryLine_rec:
                    self.env['stock.inventory.line'].search([('id','=',inventoryLine.id)]).unlink()

            product_rec = self.env['product.template'].search([('id','=', inventory.product_ids.ids)])
            products = []
            if product_rec:
                for product in product_rec:
                    products.append(product.id)

                productInventory_rec = self.env['product.template'].search([('id','!=',products)])
                productsInventory = []
                for product in productInventory_rec:
                    productsInventory.append(product.id)

                inventory.write({
                    "product_ids": productsInventory
                })

            location_rec = self.env['stock.location'].search([('id', '=', inventory.location_ids.ids)])
            count = 0
            if location_rec:
                for location in location_rec:
                    count += 1
                    self.env['project.task'].create({
                        'name': 'Tarea '+ str(count),
                        'project_id': nuevo1.id,
                        'location_ids': [location.id],
                        'product_ids': products,
                        'stage_id': nuevo2.id,
                        'user_id': 1
                    })
            else:
                location_rec = self.env['stock.location'].search([])
                for location in location_rec:
                    count += 1
                    self.env['project.task'].create({
                        'name': 'Tarea '+ str(count),
                        'project_id': nuevo1.id,
                        'location_ids': [location.id],
                        'product_ids': products,
                        'stage_id': nuevo2.id,
                        'user_id': 1
                    })
        
        return project


# class InventoryCount(models.Model):
#     _name: 'stock.inventory.line'
#     _inherit = 'stock.inventory.line'

#     @api.model
#     def write(self, vals):

    # name = fields.Char()
    # value = fields.Integer()
    # value2 = fields.Float(compute="_value_pc", store=True)
    # description = fields.Text()

    # @api.depends('value')
    # def _value_pc(self):
    #     for record in self:
    #         record.value2 = float(record.value) / 100

class inventario_cu_employees(models.Model):
    _name='res.users'
    _inherit = 'res.users'

    inventory_employee = fields.One2many('stock.inventory', "inventory_employee", string='Employee')


class inventario_cu_project(models.Model):
    _name='project.project'
    _inherit = 'project.project'

    # inventory_id = fields.One2one(
    #     'stock.inventory', string='Inventario')

class inventario_cu_task(models.Model):
    _name='project.task'
    _inherit = 'project.task'
    
    company_id = fields.Many2one(
        'res.company', 'Company',
        readonly=True, index=True, required=True,
        default=lambda self: self.env.company)
    location_ids = fields.Many2many(
        'stock.location', string='Almacenes')
    product_ids = fields.Many2many(
        'product.product', string='Excepciones')


# class inventario_cu_product(models.Model):
#     _name='product.product'
#     _inherit = 'product.product'


#     inventory_id = fields.One2many(
#         'stock.inventory','id', string='Inventario')
#     location_ids = fields.Many2many(
#         'stock.location', string='Almacenes')

# class inventario_cu_location(models.Model):
#     _name='stock.location'
#     _inherit = 'stock.location'


#     inventory_id = fields.One2many(
#         'stock.inventory','id', string='Inventario')
#     product_ids = fields.Many2many(
#         'product.product', string='Productos')

    # company_id = fields.Many2one(
    #     'res.company', 'Company',
    #     readonly=True, index=True, required=True,
    #     states={'draft': [('readonly', False)]},
    #     default=lambda self: self.env.company)
    # location_ids = fields.Many2many(
    #     'stock.location', string='Locations',
    #     readonly=True, check_company=True,
    #     states={'draft': [('readonly', False)]},
    #     domain="[('company_id', '=', company_id), ('usage', 'in', ['internal', 'transit'])]")
    # product_ids = fields.Many2many(
    #     'product.product', string='Products', check_company=True,
    #     domain="[('type', '=', 'product'), '|', ('company_id', '=', False), ('company_id', '=', company_id)]", readonly=True,
    #     states={'draft': [('readonly', False)]},
    #     help="Specify Products to focus your inventory on particular Products.")