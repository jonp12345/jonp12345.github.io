(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1180:function(e,t,a){"use strict";a(772)},1181:function(e,t,a){},1471:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vehicles-by-category",attrs:{"data-scroll-fade-in":e.fadeinOnScroll}},[a("div",{class:["vehicles-by-category__wrapper",{"vehicles-by-category__wrapper--hide":"false"===e.showCategories},{"vehicles-by-category__wrapper--show":"true"===e.showCategories}]},e._l(e.categories,(function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:s===e.selectedCategory.index,expression:"categoryIndex === selectedCategory.index"}],key:s,staticClass:"vehicles-by-category__wrapper-categories"},[e.showTitle&&t.categoryName?a("div",{staticClass:"vehicles-by-category__wrapper-title"},[a("span",{staticClass:"vehicles-by-category__wrapper-title-text",domProps:{innerHTML:e._s(t.categoryName)}})]):e._e(),e._v(" "),e._l(t.models,(function(t,s){return a("div",{key:s,class:["vehicles-by-category__wrapper-list",{"vehicles-by-category__wrapper-list--inactive":null!==e.isHovering&&e.isHovering!==s}],on:{mouseenter:function(t){e.isHovering=s},mouseleave:function(t){e.isHovering=null}}},[a("div",{staticClass:"vehicles-by-category__wrapper-list-card"},[a("vehicle-card",{attrs:{vehicle:t.vehicleCard},on:{"image-loaded":function(a){return e.imageLoaded(t)}}})],1)])}))],2)})),0)])};s._withStripped=!0;var i={name:"Vehicles_By_Category",props:{selectedItem:{type:Object,default:()=>({})},isMobileNestedModal:{type:Boolean,default:!1},categoryData:{type:[String,Array]},imageFormat:{type:String,default:"png"},showTitle:{type:Boolean,default:!1},language:{type:String,default:"en"},fadeinOnScroll:{type:Boolean,default:!1}},data(){return{categories:[],selectedCategory:this.selectedItem,showCategories:"none",animationDelay:300,isHovering:null,languagePath:"en"===this.language?"":this.language,tabCategories:[]}},mounted(){if(this.categoryData)if("object"==typeof this.categoryData)this.categories=this.categoryData;else if("string"==typeof this.categoryData){var e=this.categoryData.replace(/'/g,'"');this.categories=JSON.parse(this.$subaruUtils.dataSanitation(e,"disclaimers"))}this.categories.forEach(e=>{this.tabCategories.push({name:e.categoryName,code:e.categoryName.replace(/\s/g,"").toLowerCase(),url:e.categoryUrl}),e.models.forEach(e=>{e.mediaAssets&&(e.mediaAssets.fmt=this.imageFormat),e.vehicleCard={alternativeDisplay:e.alternativeDisplay,url:this.getUrl(e),ariaLabel:this.getAriaLabel(e),targetTab:this.getTarget(e),mediaAssets:this.getMediaAssets(e),title:this.getTitle(e),secondaryTitle:this.getSecondaryTitle(e),includeMsrp:e.includeMsrp,msrp:e.msrp,preTextMsrp:e.preTextMsrp,postTextMsrp:e.postTextMsrp,includeMpg:e.includeMpg,mpg:e.mpg,preTextMpg:e.preTextMpg,postTextMpg:e.postTextMpg,tags:e.tags}})}),this.$emit("initial-setup",this.tabCategories)},watch:{selectedItem:function(e){this.isMobileNestedModal?(this.showCategories="none",this.selectedCategory=e,this.checkAllImagesLoaded()):(this.showCategories="false",setTimeout(()=>{this.selectedCategory=e,this.checkAllImagesLoaded()},this.animationDelay))}},methods:{imageLoaded(e){e.imageLoaded=!0,this.checkAllImagesLoaded()},checkAllImagesLoaded(){Object.values(this.categories.find(e=>e.categoryName==this.selectedCategory.name).models).find(e=>!e.imageLoaded)||(this.showCategories="true")},isDataDriven:e=>"driven"===e.dataType&&e.modelName&&e.modelYear,getMediaAssets(e){return e.mediaAssets&&this.isDataDriven(e)&&(e.mediaAssets.alternativeTextXL="Subaru ".concat(e.modelName," Image")),e.mediaAssets||""},getUrl:e=>e.internalLinkUrl||e.externalLinkUrl,getAriaLabel(e){return this.isDataDriven(e)?e.modelYear+" Subaru "+e.modelName:e.title||""},getTitle(e){return this.isDataDriven(e)?"".concat(e.modelYear," ").concat(e.modelName):e.title||""},getSecondaryTitle:e=>!e.includeMsrp&&e.secondaryTitle?e.secondaryTitle:"",getTarget(e){return this.isDataDriven(e)?"_self":e.target}}},r=(a(1180),a(4)),o=Object(r.a)(i,s,[],!1,null,null,null);o.options.__file="content/jcr_root/apps/subaru/components/content/commons/Vehicles_By_Category/webpack.module/js/Vehicles_By_Category.vue";t.default=o.exports},772:function(e,t,a){var s=a(19),i=a(1181);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};s(i,r);e.exports=i.locals||{}}}]);