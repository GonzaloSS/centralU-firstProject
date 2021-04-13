# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class Task(http.Controller):
    



     @http.route('/api/getTask', type="json" ,  auth="public" , cors='*')
     def seeContact(self):
         
         task_rec = request.env['project.task'].sudo().search([])
         task = []
         for rec in task_rec:

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
                        'id' : rec.id,
                        'name': rec.name,
                        'project_id': rec.project_id,
                        'project_name': rec.project_id.name,
                        'user_id': rec.user_id.name,
                        'stage_id': rec.stage_id.id,
                        'stage_name': rec.stage_id.name,
                        'date_deadline': rec.date_deadline,
                        'locations': location,
                        'products': product

                    }
                task.append(vals)
         
         return task

 

     @http.route('/api/createTask', type='json', cors='*', auth='public')
     def createCompany(self, **rec):
        if request.jsonrequest:
            if rec['name']:
                vals = {
                 'name': rec["name"],
                 'project_id': 1,
                 'user_id': rec["user_id"],
                 'description': rec["description"],
                 'date_deadline': rec["date_deadline"]                 
                    
                }
                new_task = request.env['project.task'].sudo().create(vals)
                args = {'success': True, 'message': 'Success', 'ID': new_task}
        return args

     @http.route('/api/getEmployeeTask', type="json" , csrf=True, cors='*', auth="user" ,website=False, method=['POST'])
     def seeAContact(self, **rec):
         task_rec = request.env['project.task'].sudo().search([('user_id', '=', rec['user_id'])])
         task = []
         for rec in task_rec:

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
                        'id' : rec.id,
                        'name': rec.name,
                        'project_id': rec.project_id.name,
                        'project':rec.project_id.id,
                        'stage_name': rec.stage_id.name,
                        'user_id': rec.user_id.name,
                        'date_deadline': rec.date_deadline,
                        'locations': location,
                        'products':product

                    }
                task.append(vals)
         
         return task


     @http.route('/api/updateTask', type='json', cors = '*', auth='user')
     def updateContact(self, **rec):
        if request.jsonrequest:
             if rec['id']:
                task = request.env['project.task'].sudo().search([('id', '=', rec['id'])])
                if task:
                   task.sudo().write(rec)
                args = {'success': True, 'message': 'Success'}
        return args
     

     @http.route('/api/deleteTask', type='json', cors= '*', auth='user')
     def deleteContact(self, **rec):
        if request.jsonrequest:
             if rec['id']:
                request.env['project.task'].sudo().search([('id', '=', rec['id'])]).unlink()
                args = {'success': True, 'message': 'Success'}
        return args


     @http.route('/api/getProjectStages', type="json" , csrf=True, cors='*', auth="public" ,website=False, method=['POST'])
     def getProjectStages(self, **rec):
        if request.jsonrequest:
            task_rec = request.env['project.task.type'].sudo().search([('project_ids','=',rec['project_ids']), ('name','=',rec['stage_name'])])
            task = []
            for rec in task_rec:
                vals = {
                    'id':rec.id,
                    'name':rec.name,
                    'project_ids': rec.project_ids,
                    'project_name': rec.project_ids.name

                }
                task.append(vals)
            
            return task