$(document).ready(function() {


	$('#feedback-valid-form1').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-form1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
					}
				}  
			}); 
		}
	});

	$('#feedback-valid-form2').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-form2')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
					}
				}  
			}); 
		}
	});



	$('#feedback-valid-form3').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-form3')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
					}
				}  
			}); 
		}
	});
	$('#feed-calc').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feed-calc')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
					}
				}  
			}); 
		}
	});


	$('#feedback-valid-plan').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-plan')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
					}
				}  
			}); 
		}
	});

	$('#feedback-valid-prize').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-prize')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
					}
				}  
			}); 
		}
	});

	$('#feedback-valid-call').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-call')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
					}
				}  
			}); 
		}
	});


	$('#feedback-valid-1').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
					}
				}  
			}); 
		}
	});

});
