var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

router.get('/',restrict, function(req, res, next){
	
	var i_n_v = {
		title: 'Orders page',
		currently_on_orders_page: 'orders_page',
		order_id: req.session.orderId,
		first_name: req.user? req.user.first_name : null
	};
	res.render('orders/index', i_n_v);
});

module.exports = router;