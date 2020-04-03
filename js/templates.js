(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['country_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "   <option value=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"countryInfo") : depth0)) != null ? lookupProperty(stack1,"iso2") : stack1), depth0))
    + "\">"
    + alias1(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"country","hash":{},"data":data,"loc":{"start":{"line":2,"column":40},"end":{"line":2,"column":51}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['global_stats'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h3>Global stats</h3>\n<span>Updated: "
    + alias3((lookupProperty(helpers,"timeanddate")||(depth0 && lookupProperty(depth0,"timeanddate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"updated") : depth0),{"name":"timeanddate","hash":{},"data":data,"loc":{"start":{"line":2,"column":15},"end":{"line":2,"column":38}}}))
    + "</span>\n<div class=\"row dash-row\">\n\n    <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"stats stats-primary\">\n            <h3 class=\"stats-title\"> Cases </h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div> \n                 <div class=\"stats-data\">\n                    <div class=\"stats-number\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"cases") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":13,"column":46},"end":{"line":13,"column":65}}}))
    + "</div>\n                </div>                   \n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"stats stats-danger\">\n            <h3 class=\"stats-title\"> Deaths </h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n                <div class=\"stats-data\">\n                    <div class=\"stats-number\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"deaths") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":27,"column":46},"end":{"line":27,"column":66}}}))
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"stats stats-primary\">\n            <h3 class=\"stats-title\"> Active </h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n               <div class=\"stats-data\">\n                    <div class=\"stats-number\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"active") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":41,"column":46},"end":{"line":41,"column":66}}}))
    + "</div>\n                    <div class=\"stats-change\">\n                        <span class=\"stats-percentage\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"recovered") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":43,"column":55},"end":{"line":43,"column":78}}}))
    + "</span>\n                        <span class=\"stats-timeframe\">recovered</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n   \n\n    <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"stats stats-primary\">\n            <h3 class=\"stats-title\"> Affected countries</h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n                <div class=\"stats-data\">\n                    <div class=\"stats-number\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"affected") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":60,"column":46},"end":{"line":60,"column":68}}}))
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";
},"useData":true});
templates['news_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":28}}}) : helper)))
    + "\" target=\"_blank\" class=\"notification\">\n                <div class=\"notification-icon\">\n                    <i class=\"fas fa-inbox\"></i>\n                </div>\n                <div class=\"notification-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":47},"end":{"line":8,"column":56}}}) : helper)))
    + "</div>\n                <span class=\"notification-time\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":9,"column":48},"end":{"line":9,"column":56}}}) : helper)))
    + "</span>\n            </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notifications\" >\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "\n    <div class=\"notifications-show-all\">\n        <a href=\"#!\">Show all</a>\n    </div>\n</div>";
},"useData":true});
templates['state_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "   <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"state") || (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":27}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"state") || (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":38}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['stats_by_country'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "               <option value=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"countryInfo") : depth0)) != null ? lookupProperty(stack1,"iso2") : stack1), depth0))
    + "\">"
    + alias1(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"country","hash":{},"data":data,"loc":{"start":{"line":5,"column":52},"end":{"line":5,"column":63}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row dash-row\">\n    <div class=\"col-3\">\n        <select class=\"form-control\" id=\"country_list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":6,"column":21}}})) != null ? stack1 : "")
    + "        </select>\n    </div>\n    <div class=\"col-3\">\n        <select class=\"form-control hidden\" id=\"state_list\"></select>\n    </div>            \n    </div>\n\n    <div id=\"country_values\">\n    \n        <!-- content here -->\n\n    </div>   \n</div>";
},"useData":true});
templates['stats_by_country_boxes'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row dash-row\">\n    <div class=\"col-sm-6 col-lg-4\">\n        <div class=\"stats stats-primary\">\n            <h3 class=\"stats-title\"> Total cases </h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n                <div class=\"stats-data\">\n                    <div class=\"stats-number\" id=\"total_cases\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"cases") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":10,"column":63},"end":{"line":10,"column":82}}}))
    + "</div>\n                    <div class=\"stats-change\">\n                        <span class=\"stats-percentage\" id=\"total_new_cases_today\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"todayCases") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":12,"column":82},"end":{"line":12,"column":106}}}))
    + "</span>\n                        <span class=\"stats-timeframe\">today</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-6 col-lg-4\">\n        <div class=\"stats stats-primary\">\n            <h3 class=\"stats-title\"> Total active cases </h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n                <div class=\"stats-data\">\n                    <div class=\"stats-number\" id=\"total_active_cases\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"active") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":28,"column":70},"end":{"line":28,"column":90}}}))
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-6 col-lg-4\">\n        <div class=\"stats stats-danger\">\n            <h3 class=\"stats-title\"> Total critical cases </h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n                <div class=\"stats-data\">\n                    <div class=\"stats-number\" id=\"total_serious_cases\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"critical") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":42,"column":71},"end":{"line":42,"column":93}}}))
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row dash-row\">\n\n    <div class=\"col-sm-6 col-lg-4\">\n        <div class=\"stats stats-success\">\n            <h3 class=\"stats-title\"> Total recovered</h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n                <div class=\"stats-data\">\n                    <div class=\"stats-number\" id=\"total_recovered\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"recovered") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":59,"column":67},"end":{"line":59,"column":90}}}))
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-6 col-lg-4\">\n        <div class=\"stats stats-primary\">\n            <h3 class=\"stats-title\"> Cases per million </h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n                <div class=\"stats-data\">\n                    <div class=\"stats-number\" id=\"total_unresolved\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"casesPerOneMillion") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":73,"column":68},"end":{"line":73,"column":100}}}))
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-6 col-lg-4\">\n        <div class=\"stats stats-danger\">\n            <h3 class=\"stats-title\"> Total deaths </h3>\n            <div class=\"stats-content\">\n                <div class=\"stats-icon\">\n                    <i class=\"fas fa-user\"></i>\n                </div>\n                <div class=\"stats-data\">\n                    <div class=\"stats-number\" id=\"total_deaths\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"deaths") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":87,"column":64},"end":{"line":87,"column":84}}}))
    + "</div>\n                    <div class=\"stats-change\">\n                        <span class=\"stats-percentage\" id=\"total_new_deaths_today\">"
    + alias3((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"todayDeaths") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":89,"column":83},"end":{"line":89,"column":108}}}))
    + "</span>\n                        <span class=\"stats-timeframe\">today</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <tr>                                \n                                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data,"loc":{"start":{"line":28,"column":48},"end":{"line":28,"column":59}}}) : helper)))
    + "</th>   \n                                <td class=\"text-right\">"
    + alias4((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"population") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":29,"column":55},"end":{"line":29,"column":80}}}))
    + "</td>\n                                <td class=\"text-right\">"
    + alias4((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"cases") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":30,"column":55},"end":{"line":30,"column":75}}}))
    + "</td>\n                                <td class=\"text-right\">"
    + alias4((lookupProperty(helpers,"thousands")||(depth0 && lookupProperty(depth0,"thousands"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"deaths") : depth0),{"name":"thousands","hash":{},"data":data,"loc":{"start":{"line":31,"column":55},"end":{"line":31,"column":76}}}))
    + "</td>\n                                <td class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"temperature") || (depth0 != null ? lookupProperty(depth0,"temperature") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temperature","hash":{},"data":data,"loc":{"start":{"line":32,"column":55},"end":{"line":32,"column":70}}}) : helper)))
    + "</td>\n                                <td class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"death_ratio_per_infected") || (depth0 != null ? lookupProperty(depth0,"death_ratio_per_infected") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"death_ratio_per_infected","hash":{},"data":data,"loc":{"start":{"line":33,"column":55},"end":{"line":33,"column":83}}}) : helper)))
    + " %</td>\n                                <td class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"death_ratio_per_population") || (depth0 != null ? lookupProperty(depth0,"death_ratio_per_population") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"death_ratio_per_population","hash":{},"data":data,"loc":{"start":{"line":34,"column":55},"end":{"line":34,"column":85}}}) : helper)))
    + "</td>\n                                <td class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"death_ratio_per_temperature") || (depth0 != null ? lookupProperty(depth0,"death_ratio_per_temperature") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"death_ratio_per_temperature","hash":{},"data":data,"loc":{"start":{"line":35,"column":55},"end":{"line":35,"column":86}}}) : helper)))
    + "</td>\n                            </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row dash-row\">\n    <div class=\"col-xl-12\">\n\n        <div class=\"card spur-card\">\n            <div class=\"card-header\">\n                <div class=\"spur-card-icon\">\n                    <i class=\"fas fa-table\"></i>\n                </div>\n                <div class=\"spur-card-title\">Default table</div>\n            </div>\n            <div class=\"card-body \">\n                <table class=\"table table-in-card\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">country</th>\n                            <th scope=\"col\"><a class=\"col-population\" href=\"#\">population</a></th>\n                            <th scope=\"col\"><a class=\"col-cases\" href=\"#\">cases</a></th>\n                            <th scope=\"col\"><a class=\"col-deaths\" href=\"#\">deaths</a></th>\n                            <th scope=\"col\"><a class=\"col-temperature\" href=\"#\">yearly avg temp</a></th>\n                            <th scope=\"col\"><a class=\"col-ratio1\" href=\"#\">deaths/case</a></th>                            \n                            <th scope=\"col\"><a class=\"col-ratio2\" href=\"#\">deaths/population</br> per million</a></th>\n                            <th scope=\"col\"><a class=\"col-ratio3\" href=\"#\">deaths/temperature</a></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":37,"column":33}}})) != null ? stack1 : "")
    + "                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n</div>";
},"useData":true});
})();