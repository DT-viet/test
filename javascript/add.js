$(document).ready(function(){
    try {
        initEvents();
        initialize();
    } catch (e) {
        alert("realy" +e.message);
    }
});

function initEvents () {
    $(document).on('click', '.btn_new', function  () {
        // JSON.stringify(data)
        // $.ajax({
        //     type: "GET",
        //     url: "https://627b4090b54fe6ee0084bf3a.mockapi.io/api/exmaple/table",
        //     dataType: "json",
        //     data: {},
        //     loading: true,
        //     success: function (res) {
        //         var html = "";
        //         for (let index = 0; index < res.length; index++) {
        //             var html = html +"<tr>"
        //                 +'<td>'+res[index]['id']+'</td>'
        //                 +'<td>'+res[index]['no']+'</td>'
        //                 +'<td>'+res[index]['name']+'</td>'
        //                 +'<td>'+res[index]['age']+'</td>'
        //                 +'<td>'+res[index]['sex']+'</td>'
        //                 +'<td>'+res[index]['address']+'</td>'
        //                 +'<td>'+res[index]['company_in']+'</td>'
        //                 +'<td>'+res[index]['company_out']+'</td>'
        //                 +'<td style="text-align:center ;padding: 0; width: 24px;">'
        //                     +'<button type="button" class="btn_close">'
        //                         +'<i class="fa-solid fa-xmark"></i>'
        //                     +'</button>'
        //                 +'</td>'
        //             +'</tr>';
        //         }
        //         $("#render tbody").empty();
        //         $('#render tbody').append(html);
        //     },
        // });

        // $.ajax({
        //     type: "POST",
        //     url: "https://627b4090b54fe6ee0084bf3a.mockapi.io/api/exmaple/error",
        //     dataType: "json",
        //     data: {
        //         id : '1',
        //         no : '1',
        //         name : '1',
        //         age : '1',
        //         sex : '1',
        //         address : '1',
        //         company_in : '1',
        //         company_out : '1',
        //     },
        //     success: function (res) {
        //         console.log(res);
        //     },
        // });

        $('.model').addClass('open')
       
    });

    $(document).on('click', '.model', function  () {
        $('.model').removeClass('open')
    });

    $(document).on('click', '.model_container', function    (event) {
        event.stopPropagation()
    })

    $(document).on('click', '.btn_close', function () {
        $(this).closest("tr").remove();
    });

    $(document).on('click', '.btn_save', function () {
        validate();
    });
    $(document).on('keyup', '.input_no', function  () {
        if (/\D/g.test(this.value)){
      this.value = this.value.replace(/\D/g, '',);
        }     
    });

    $(document).on('keyup', '.input_age', function  () {
        if (/\D/g.test(this.value)){
      this.value = this.value.replace(/\D/g, '',);
        }     
    });

   
}
function initialize () {
}

function validate(element) {
	if (!element) {
		element = $('body');
	}
	var error = 0;
	try {
		// validate required
		element.find('.required[type=text]:enabled').each(function() {
                console.log($(this).is("input"));
				if (($(this).is("input") || $(this).is("textarea")) && $.trim($(this).val()) == '') {
					// hiện thị lỗi 
					error++;
				}else if ($(this).is("select") && ($(this).val() == '-1'  || $(this).val() == undefined)) {
					// hiện thị lỗi 
					error++;
				}
		});
        var check = 0;
        element.find('.required[type=radio]:enabled').each(function() {
            if($(this).prop('checked')){
                check++;
            }
            //
		});
        if(check == 0){
            // hiện thị lỗi 
            error++;
        }

		if (error > 0) {
			return false;
		} else {
			return true;
		}
	} catch (e) {
		alert('_validate: ' + e.toString());
	}
}