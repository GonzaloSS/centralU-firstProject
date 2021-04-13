# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class Product(http.Controller):
    



     @http.route('/api/getProducts', type="json" ,  auth="public" , cors='*')
     def seeContact(self):
         
         product_rec = request.env['product.template'].sudo().search([])
         product = []
         for rec in product_rec:
             vals = {
                 'id' : rec.id,
                 'name': rec.name,
                 'description': rec.description,
                 'type': rec.type,
                 'product_category': rec.categ_id.name,
                 'default_code': rec.default_code,
                 'barcode': rec.barcode,
                 'list_price': rec.list_price,
                 'company': rec.company_id.name,
                 'sale_ok': rec.sale_ok,
                 'purchase_ok': rec.purchase_ok
                 

             }
             product.append(vals)
         
         return product

     @http.route('/api/getASingleProduct', type="json" , csrf=True, cors='*', auth="user" ,website=False, method=['POST'])
     def seeAContact(self, **rec):
          if request.jsonrequest:
                 if rec['id']:
                    contact_rec = request.env['product.template'].sudo().search([('id', '=', rec['id'])])
                    contact = []
                 for rec in contact_rec:
                    vals = {
                        'id' : rec.id,
                        'name': rec.name,
                        'description': rec.description,
                        'type': rec.type,
                        'product_category': rec.categ_id.name,
                        'default_code': rec.default_code,
                        'barcode': rec.barcode,
                        'list_price': rec.list_price,
                        'company': rec.company_id.name,
                        'sale_ok': rec.sale_ok,
                        'purchase_ok': rec.purchase_ok                    

                    }
                    contact.append(vals)
                    return contact


     @http.route('/api/getASingleProductByABarCode', type="json" , csrf=True, cors='*', auth="user" ,website=False, method=['POST'])
     def seeAProduct(self, **rec):
          if request.jsonrequest:
                 if rec['barcode']:
                    contact_rec = request.env['product.template'].sudo().search([('barcode', '=', rec['barcode'])])
                    contact = []
                 for rec in contact_rec:
                    vals = {
                        'id' : rec.id,
                        'name': rec.name,
                        'description': rec.description,
                        'type': rec.type,
                        'product_category': rec.categ_id.name,
                        'default_code': rec.default_code,
                        'barcode': rec.barcode,
                        'list_price': rec.list_price,
                        'company': rec.company_id.name,
                        'sale_ok': rec.sale_ok,
                        'purchase_ok': rec.purchase_ok

                    }
                    contact.append(vals)
                    return contact




     @http.route('/api/createProduct', type='json', cors='*', auth='user')
     def createCompany(self, **rec):
        if request.jsonrequest:
            if rec['name']:
                vals = {
                        'name': rec["name"],
                        'description': rec["description"],
                        'type': rec["type"],
                        'default_code': rec["default_code"],
                        'barcode': rec["barcode"],
                        'list_price': rec["list_price"],
                        'sale_ok': rec["sale_ok"],
                        'purchase_ok': rec["purchase_ok"],                
                    
                }
                new_product = request.env['product.template'].sudo().create(vals)
                args = {'success': True, 'message': 'Success', 'ID': new_product}
        return args

     @http.route('/api/updateProduct', type='json', cors = '*', auth='user')
     def updateContact(self, **rec):
        if request.jsonrequest:
             if rec['id']:
                product = request.env['product.template'].sudo().search([('id', '=', rec['id'])])
                if product:
                   product.sudo().write(rec)
                args = {'success': True, 'message': 'Success'}
        return args

     @http.route('/api/deleteProduct', type='json', cors= '*', auth='user')
     def deleteContact(self, **rec):
        if request.jsonrequest:
             if rec['id']:
                request.env['product.template'].sudo().search([('id', '=', rec['id'])]).unlink()
                args = {'success': True, 'message': 'Success'}
        return args