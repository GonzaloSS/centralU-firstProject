# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


CORS = '*'

class StockController(http.Controller):


   
      @http.route('/api/getInventory', type="json" ,  auth="public" , csfr=True, cors='*')


      def getInventory(self):
         
            

         inventory_rec = request.env['stock.inventory'].sudo().search([])
         inventory = list()

            
         for rec in inventory_rec:
                
            location_rec = request.env['stock.location'].sudo().search([('id', '=', rec.location_ids.ids)])
            location = []
            for lot in location_rec:
               vals2= {
               'id': lot.id,   
               'name': lot.complete_name
               }
               location.append(vals2)

            product_rec = request.env['product.template'].sudo().search([('id', '=', rec.product_ids.ids)])
            product = []
            for pro in product_rec:
               vals3= {
               'id': pro.id,
               'name': pro.name,
               'barcode': pro.barcode
               }
               product.append(vals3)
                         
                         
      
               vals = {
                      'id': rec.id,
                     'date': rec.date,
                     'name': rec.name,
                     'product_ids': product,
                     'location_ids': location ,
                     'accounting_date': rec.accounting_date,
                     'prefill_counted_quantity':rec.prefill_counted_quantity,
                     'exhausted': rec.exhausted,
                     'state': rec.state              
                   
                }

         
               inventory.append(vals)

         return inventory

      @http.route('/api/getASingleInventory', type="json" ,  auth="public" , csfr=True, cors='*')


      def getASingleInventory(self, **rec):
         if request.jsonrequest:
            inventory_rec = request.env['stock.inventory'].sudo().search([('name', '=', rec['name'])])
            inventory = list()

               
            for rec in inventory_rec:
                  
               location_rec = request.env['stock.location'].sudo().search([('id', '=', rec.location_ids.ids)])
               location = []
               for lot in location_rec:
                  vals2= {
                  'id': lot.id,   
                  'name': lot.complete_name
                  }
                  location.append(vals2)

               product_rec = request.env['product.template'].sudo().search([('id', '=', rec.product_ids.ids)])
               product = []
               for pro in product_rec:
                  vals3= {
                  'id': pro.id,
                  'name': pro.name,
                  'barcode': pro.barcode
                  }
                  product.append(vals3)
                           
                           
         
               vals = {
                        'id': rec.id,
                        'date': rec.date,
                        'name': rec.name,
                        'product_ids': product,
                        'location_ids': location ,
                        'accounting_date': rec.accounting_date,
                        'prefill_counted_quantity':rec.prefill_counted_quantity,
                        'exhausted': rec.exhausted,
                        'state': rec.state              
                     
                  }

            
               inventory.append(vals)

            return inventory      


      @http.route('/api/getLocation', type="json" ,  auth="public" , csfr=True, cors='*')
      def seeLocation(self):
            

         location_rec = request.env['stock.location'].sudo().search([])
         location = []

         for rec in location_rec:
            vals = {
                 'id': rec.id,
                 'name': rec.complete_name,
                 

             }
         
            location.append(vals)

         return location  


      @http.route('/api/getASingleLocation', type="json" ,  auth="public" , csfr=True, cors='*')
      def seeASingleLocation(self, **rec):
            
          if request.jsonrequest:
            location_rec = request.env['stock.location'].sudo().search([('id','=',rec['id'])])
            location = []

            for rec in location_rec:
               vals = {
                  'id': rec.id,
                  'name': rec.complete_name,
                  

               }
            
               location.append(vals)

            return location  




      @http.route('/api/createInventory', type="json" ,  auth="public" , csfr=True, cors='*')
      def createInventory(self, **rec):

          if request.jsonrequest:
            if rec['name']:
                vals = {
                 'name': rec['name'],
                 'accounting_date': rec['accounting_date'],
                 'product_ids': rec['product_ids'],
                 'location_ids': rec['location_ids'],
                 'exhausted':rec['exhausted'],
                 'prefill_counted_quantity':rec['prefill_counted_quantity'],
                 
                }
                new_inventory = request.env['stock.inventory'].sudo().create(vals)
                args = {'success': True, 'message': 'Success', 'ID': new_inventory.id}
          return args


      @http.route('/api/updateInventory', type='json', cors = '*', auth='public')
      def updateInventory(self, **rec):
        if request.jsonrequest:
             if rec['id']:
                inventory = request.env['stock.inventory'].sudo().search([('id', '=', rec['id'])])
                if inventory:
                   inventory.sudo().write(rec)
                args = {'success': True, 'message': 'Success'}
        return args

      @http.route('/api/deleteInventory', type='json', cors= '*', auth='public')
      def deleteInventory(self, **rec):
        if request.jsonrequest:
             if rec['id']:
                request.env['stock.inventory'].sudo().search([('id', '=', rec['id'])]).unlink()
                args = {'success': True, 'message': 'Success'}
        return args


      @http.route('/api/getInventoryLine', type="json" ,  auth="public" , csfr=True, cors='*')
      def seeInventoryLine(self):
            

         inventory_rec = request.env['stock.inventory.line'].sudo().search([])
         inventory = []

         for rec in inventory_rec:
            vals = {
                 'id': rec.id,
                 'invetory_id': rec.inventory_id,
                 'location_id':rec.location_id,
                 'product_id': rec.product_id,
                 'product_qty': rec.product_qty

             }
         
            inventory.append(vals)

         return inventory


      @http.route('/api/isInventoryLine', type="json" ,  auth="public" , csfr=True, cors='*')
      def isInventoryLine(self, **rec):
            

         inventory_rec = request.env['stock.inventory.line'].sudo().search([('inventory_id', '=', rec['inventory_id']), ('product_id','=', rec['product_id']), ('location_id','=', rec['location_id'])])
         inventory = []

         for rec in inventory_rec:
            vals = {
                 'id': rec.id,
                 'inventory_id': rec.inventory_id.id,
                 'location_id': rec.location_id.id,
                 'product_id': rec.product_id.id,
                 'product_qty': rec.product_qty

             }
         
            inventory.append(vals)

         return inventory


      @http.route('/api/getASingleInventoryLine', type="json" , csrf=True, cors='*', auth="user" ,website=False, method=['POST'])
      def seeSingleInventoryLine(self, **rec):
          if request.jsonrequest:

                     inventory_rec = request.env['stock.inventory.line'].sudo().search([('inventory_id', '=', rec['inventory_id'])])
                     inventory = []

                     for rec in inventory_rec:
                     # if rec['name']:
                     #    inventory_rec = request.env['stock.inventory'].sudo().search([('name', '=', rec['name'])])
                     #    inventory = []
                     #    for rec in inventory_rec:
                        
                        location_rec = request.env['stock.location'].sudo().search([('id', '=', rec.location_id.ids)])
                        location = []
                        for lot in location_rec:
                           vals2= {
                              'name': lot.complete_name
                              }
                        location.append(vals2)

                        product_rec = request.env['product.template'].sudo().search([('id', '=', rec.product_id.ids)])
                        product = []
                        for pro in product_rec:
                           vals3= {
                              'name': pro.name,
                              'id': pro.id,
                              'barcode': pro.barcode
                           }
                        product.append(vals3) 

                        vals = {
                           'id': rec.id,
                           'invetory_id': rec.inventory_id,
                           'location_id': location,
                           'product_id': product,
                           'product_qty': rec.product_qty

                        }
                     
                        inventory.append(vals)

                     return inventory


      @http.route('/api/createInventoryLine', type="json" ,  auth="public" , csfr=True, cors='*')
      def createInventoryLine(self, **rec):

          if request.jsonrequest:
            if rec['inventory_id']:
                vals = {
                 'inventory_id': rec['inventory_id'],
                 'product_id':rec['product_id'],
                 'location_id':rec['location_id'],
                 'product_qty':rec['product_qty']
                 
                }
                new_inventory = request.env['stock.inventory.line'].sudo().create(vals)
                args = {'success': True, 'message': 'Success', 'ID': new_inventory.id}
          return args


      @http.route('/api/updateInventoryLine', type='json', cors = '*', auth='public')
      def updateInventoryLine(self, **rec):
        if request.jsonrequest:
             if rec['id']:
                inventory = request.env['stock.inventory.line'].sudo().search([('id', '=', rec['id'])])
                if inventory:
                   inventory.sudo().write(rec)
                args = {'success': True, 'message': 'Success'}
        return args
        