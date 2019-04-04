$(document).ready(function () {



     $("#add").click(function () {
         var policynumber = $("#policyNumber").val();
         var policystartdate = $("#policyStartDate").val();
         var policyenddate = $("#policyEndDate").val();

         var policyInfoData = {
             'PolicyNumber': policynumber,
             'PolicyStartDate': policystartdate,
             'PolicyEndDate': policyenddate

         };
         console.log(policyInfoData);

         $.ajax({
             type: 'POST',
             url: '/addpolicyinfodata',
             data: policyInfoData,
             success: function (data) {
                 $("#message").show().html(data['success']);
             }
         });
     });


});