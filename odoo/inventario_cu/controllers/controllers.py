# -*- coding: utf-8 -*-
# from odoo import http


# class InventarioCu(http.Controller):
#     @http.route('/inventario_cu/inventario_cu/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/inventario_cu/inventario_cu/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('inventario_cu.listing', {
#             'root': '/inventario_cu/inventario_cu',
#             'objects': http.request.env['inventario_cu.inventario_cu'].search([]),
#         })

#     @http.route('/inventario_cu/inventario_cu/objects/<model("inventario_cu.inventario_cu"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('inventario_cu.object', {
#             'object': obj
#         })
