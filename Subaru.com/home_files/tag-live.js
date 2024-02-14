(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("body_style", "Last", "URLParam", ""); }, paramName: "body_style", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "window.location.hostname + window.location.pathname"); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("DEALER_NUMBER", "Last", "URLParam", ""); }, paramName: "DEALER_NUMBER", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("device", "Last", "JavascriptDataLayer", "Invoca.Tools.deviceType()"); }, paramName: "device", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("domain_name", "Last", "JavascriptDataLayer", "window.location.host"); }, paramName: "domain_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ga_session_id", "Last", "URLParam", ""); }, paramName: "ga_session_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclsrc", "Last", "URLParam", ""); }, paramName: "gclsrc", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("g_cid", "Last", "URLParam", ""); }, paramName: "g_cid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("landing_page", "First", "JavascriptDataLayer", "window.location.href"); }, paramName: "landing_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("make", "Last", "URLParam", ""); }, paramName: "make", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("mc_id", "Last", "URLParam", ""); }, paramName: "mc_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("model", "Last", "URLParam", ""); }, paramName: "model", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("msclkid", "Last", "URLParam", ""); }, paramName: "msclkid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("page_type", "Last", "URLParam", ""); }, paramName: "page_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("provider", "Last", "URLParam", ""); }, paramName: "provider", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("region", "Last", "URLParam", ""); }, paramName: "region", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("REGION_CODE", "Last", "URLParam", ""); }, paramName: "REGION_CODE", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("SALES_DISTRICT", "Last", "URLParam", ""); }, paramName: "SALES_DISTRICT", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("SALES_DISTRICT_backup", "Last", "URLParam", ""); }, paramName: "SALES_DISTRICT_backup", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sd_adgroup", "Last", "URLParam", ""); }, paramName: "sd_adgroup", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sd_adid", "Last", "URLParam", ""); }, paramName: "sd_adid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sd_campaign", "Last", "URLParam", ""); }, paramName: "sd_campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sd_campaign_type", "Last", "URLParam", ""); }, paramName: "sd_campaign_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sd_channel", "Last", "URLParam", ""); }, paramName: "sd_channel", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sd_digadcid", "Last", "URLParam", ""); }, paramName: "sd_digadcid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sd_keyword", "Last", "URLParam", ""); }, paramName: "sd_keyword", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sd_program", "Last", "URLParam", ""); }, paramName: "sd_program", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("SERVICE_DISTRICT", "Last", "URLParam", ""); }, paramName: "SERVICE_DISTRICT", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("stock_type", "Last", "URLParam", ""); }, paramName: "stock_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("TERMIN_DATE", "Last", "URLParam", ""); }, paramName: "TERMIN_DATE", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("tier", "Last", "URLParam", ""); }, paramName: "tier", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("trim", "Last", "URLParam", ""); }, paramName: "trim", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_campaign", "Last", "URLParam", ""); }, paramName: "utm_campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_content", "Last", "URLParam", ""); }, paramName: "utm_content", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", ""); }, paramName: "utm_medium", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", ""); }, paramName: "utm_source", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_term", "Last", "URLParam", ""); }, paramName: "utm_term", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("vehicle_status", "Last", "URLParam", ""); }, paramName: "vehicle_status", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("vin", "Last", "URLParam", ""); }, paramName: "vin", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("website_journey", "Multi", "JavascriptDataLayer", "location.pathname"); }, paramName: "website_journey", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("year", "Last", "URLParam", ""); }, paramName: "year", fallbackValue: null }
];

var defaultCampaignId = "default_s.com";

var destinationSettings = {
  paramName: "invoca_detected_destination"
};

var numbersToReplace = null;

var organicSources = true;

var reRunAfter = null;

var requiredParams = null;

var resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    var ELEMENT_NODE = 1;
var DATA_ATTRIBUTE = "data-retailer-id";
var SCOM = "_scom";
var MAX_SWAP = 20;
var SWAPPED_ARRAY = [];
options.numberSelector = ".subaru-ph-dni";
options.autoRun = false;

/* Get the campaign Id from the node where the number is found and add it to request data.
 * @param {object} node - The node where number is found. 
 * @param {object} request - Request data to server.  
**/
options.onPhoneNumberFound = function (node, request) {
    if (SWAPPED_ARRAY.length < MAX_SWAP || Invoca.Client.isDuplicatedRequest(request.request_id)) {
        var target = Invoca.Client.getTargetElement(node);
        var campaignId = Invoca.Client.getCampaignId(target);
        request.advertiser_campaign_id_from_network = campaignId;
        if (Invoca.Client.isFindARetailerPage()) {
            Invoca.Client.setSwappedArray(request.request_id)
        }
        return request;
    }
    return false;
};

/*
 * Set the swapped Array to manage the max amount of number to swap on the certain page.
 * SPAPPED_ARRAY is the list of detected numbers.
 * @param {string} detectedNumber - A detected number from the page.
**/
Invoca.Client.setSwappedArray = function (detectedNumber) {
    if (!Invoca.Client.isDuplicatedRequest(detectedNumber)) {
        SWAPPED_ARRAY.push(detectedNumber)
    }
}

/*
 * Get the boolean value return on weather the page is Find a Retailer or not.
**/
Invoca.Client.isFindARetailerPage = function () {
    return location.href.indexOf("/find/a-retailer") > 0;
}

/*
 * Check if the SWAPPED_ARRAY has the duplicated detected number before pushing it to the array.
 * @param {string} number - A detected number.
**/
Invoca.Client.isDuplicatedRequest = function (number) {
    if (!SWAPPED_ARRAY.length) {
        return false;
    }
    return SWAPPED_ARRAY.indexOf(number) > -1;
}

/*
 * Remove the detected number from SWAPPED_ARRAY when the number swap request is failed.
 * @param {object} response - na.jsonp response.
**/
options.onComplete = function (response) {
    response.forEach(function(res) {
        if (res.status === 'not_found') {
            var targetIndex = SWAPPED_ARRAY.indexOf(res.requestId)
            SWAPPED_ARRAY.splice(targetIndex, 1)
        }
    })
}

/* Get the element node where the number is found. 
 * If it's a text or attribute node, get its parent - element node.
 * @param {object} rootNode - The node where number is found. 
**/
Invoca.Client.getTargetElement = function (rootNode) {
  if (rootNode.nodeType === ELEMENT_NODE){
    return rootNode
  }
  return rootNode.parentElement 
}

/* Return the campaign Id which is set with the dealer code and s.com
 * @param {object} node - The node where number is found. 
**/
Invoca.Client.getCampaignId = function (node) {
  var dealerCode = Invoca.Client.getDealerCode(node)
  return dealerCode + SCOM
}

/* Return the dealer code found from "data-phone" attribute. 
 * If it's not set or found, it returns "default".
 * @param {object} node - The node where number is found. 
**/
Invoca.Client.getDealerCode = function (node) {
  return node.getAttribute(DATA_ATTRIBUTE)
}

return options;
  };

  return true;
})();

var generatedOptions = {
  active:              true,
  autoSwap:            true,
  cookieDays:          cacheLifetimeDays,
  country:             "US",
  dataSilo:            "us",
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    ['call_type','DEALER_NAME','department','FIXEDOPS_DISTRICT','ZONE_ABBR','ZONE_CODE'],
  doNotSwap:           [],
  maxWaitFor:          waitFor,
  networkId:           networkId || null,
  numberToReplace:     numbersToReplace,
  organicSources:      organicSources,
  poolParams:          {},
  reRunAfter:          reRunAfter,
  requiredParams:      requiredParams,
  resetCacheOn:        resetCacheOn,
  waitForData:         customDataWaitForConfig
};

Invoca.Client.startFromWizard(generatedOptions);

})(2199);
