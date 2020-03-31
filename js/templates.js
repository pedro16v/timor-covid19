(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['country_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "   <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"code1") || (depth0 != null ? lookupProperty(depth0,"code1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code1","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":27}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":37}}}) : helper)))
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
templates['table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <tr>                                \n                                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":28,"column":48},"end":{"line":28,"column":57}}}) : helper)))
    + "</th>   \n                                <td class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"country_population") || (depth0 != null ? lookupProperty(depth0,"country_population") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country_population","hash":{},"data":data,"loc":{"start":{"line":29,"column":55},"end":{"line":29,"column":77}}}) : helper)))
    + "</td>\n                                <td class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"total_cases") || (depth0 != null ? lookupProperty(depth0,"total_cases") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_cases","hash":{},"data":data,"loc":{"start":{"line":30,"column":55},"end":{"line":30,"column":70}}}) : helper)))
    + "</td>\n                                <td class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"total_deaths") || (depth0 != null ? lookupProperty(depth0,"total_deaths") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_deaths","hash":{},"data":data,"loc":{"start":{"line":31,"column":55},"end":{"line":31,"column":71}}}) : helper)))
    + "</td>\n                                <td class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"country_temperature") || (depth0 != null ? lookupProperty(depth0,"country_temperature") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country_temperature","hash":{},"data":data,"loc":{"start":{"line":32,"column":55},"end":{"line":32,"column":78}}}) : helper)))
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