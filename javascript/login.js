$(document).ready(function(){
    try {
        initEvents();
        initialize();
    } catch (e) {
        alert("realy" +e.message);
    }
});

function initEvents () {
    $(document).on('click', '#btn_add', function  () {
        var row = $("#table__js_temp tbody tr:first").clone();
        $("#table__js tbody").append(row);        
    });

    $(document).on('click', '.btn-danger', function () {
        $(this).closest("tr").remove();
    });


    $(document).on('click', '#checkbox_all', function  () {
        $('.checkbox1').prop('checked', this.checked);
    })

    $(document).on('click', '.checkbox1', function  () {
        if ($(".checkbox1:not(.check_not):checked").length == $(".checkbox1:not(.check_not)").length){
            $('#checkbox_all').prop("checked",true);
        }else {
            $('#checkbox_all').prop("checked",false);
        }
    })


    $(document).on('keyup', '.notext', function  () {
        if (/\D/g.test(this.value)){
      this.value = this.value.replace(/\D/g, '',);
        }     
    });
}
function initialize () {
}