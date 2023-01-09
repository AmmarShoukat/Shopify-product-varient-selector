  // initialize multi selector for product
  jQuery(function($) {
    new Shopify.OptionSelectors("nws-variant-id", { product: {{ product | json }}, onVariantSelected: selectCallback, enableHistoryState: true });
  });
    
$( document ).ready(function() {
      $(".nws-pdp-template input.product-form__variants").click(function () {
        var value = $(this).val();
        var Vid = $(this).attr('data-v-id');
        var optVal = $(this).attr('data-option');
        var ImgID = $(this).attr('data-img-id');
        $('#'+optVal+' option').each(function(){
          $(this).removeAttr("selected");
          if ($(this).val() == value){
            $(this).attr("selected", "selected");
          }
        });
        $('#nws-variant-id option').each(function(){
          $(this).removeAttr("selected");
          if ($(this).attr('data-val') == value){
            $(this).attr("selected", "selected");
          }
        });
        
        $(".nws-pdp-template .nws-shade-color").text(value);
        $('.nws-pdp-template .nws-fake-selection-li[data-option="'+optVal+'"]').removeClass('nws-fs-active');
        $(this).parent().addClass('nws-fs-active');
  });       

   $(".nws-product-grid-item input.product-form__variants").click(function () {
          var value = $(this).val();
          var uid = $(this).attr('data-uid');
          var optVal = $(this).attr('data-option');
          var ImgID = $(this).attr('data-img-id');
          var ColorName = $(this).attr('data-select-value');
          //ColorName = ColorName.replace('-',' ');
          
          $('.'+uid+' .nws-fake-selection-li[data-option="'+optVal+'"]').removeClass('nws-fs-active');
          $(this).parent().addClass('nws-fs-active');
          $('.'+uid+' .nws-name-color').text(ColorName);
          $('.'+uid+' .nws-product-form__variants').val(value);
          $('.'+uid+'.nws-product-grid-item .nws-product-grid-item-images img').removeClass('nws-fs-active');
          $('.'+uid+'.nws-product-grid-item .nws-product-grid-item-images img[data-img-id="'+ImgID+'"]').addClass('nws-fs-active');
       });
