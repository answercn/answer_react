module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ecmaFeatures": {  
        // lambda表达式  
        "arrowFunctions": true,  
        // 解构赋值  
        "destructuring": true,  
        // class  
        "classes": true,  
        // http://es6.ruanyifeng.com/#docs/function#函数参数的默认值  
        "defaultParams": true,  
        // 块级作用域，允许使用let const  
        "blockBindings": true,  
        // 允许使用模块，模块内默认严格模式  
        "modules": true,  
        // 允许字面量定义对象时，用表达式做属性名  
        // http://es6.ruanyifeng.com/#docs/object#属性名表达式  
        "objectLiteralComputedProperties": true,  
        // 允许对象字面量方法名简写  
        /*var o = { 
            method() { 
              return "Hello!"; 
            } 
         }; 
     
         等同于 
     
         var o = { 
           method: function() { 
             return "Hello!"; 
           } 
         }; 
        */  
        "objectLiteralShorthandMethods": true,  
        /* 
          对象字面量属性名简写 
          var foo = 'bar'; 
          var baz = {foo}; 
          baz // {foo: "bar"} 
     
          // 等同于 
          var baz = {foo: foo}; 
        */  
        "objectLiteralShorthandProperties": true,  
        // http://es6.ruanyifeng.com/#docs/function#rest参数  
        "restParams": true,  
        // http://es6.ruanyifeng.com/#docs/function#扩展运算符  
        "spread": true,  
        // http://es6.ruanyifeng.com/#docs/iterator#for---of循环  
        "forOf": true,  
        // http://es6.ruanyifeng.com/#docs/generator  
        "generators": true,  
        // http://es6.ruanyifeng.com/#docs/string#模板字符串  
        "templateStrings": true,  
        "superInFunctions": true,  
        // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符  
        "experimentalObjectRestSpread": true  
      },  
      "rules": {
        // Possible Errors
        "comma-dangle": [2, "never"],
        "computed-property-spacing": [2, "never"],
        "no-cond-assign": 2,
        "no-console": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-keys": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-reserved-keys": 0,
        "no-sparse-arrays": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": 2,
        // Best Practices
        "block-scoped-var": 2,
        "complexity": 0,
        "consistent-return": 2,
        "curly": 2,
        "default-case": 2,
        "dot-notation": 2,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-confusing-arrow": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-process-env": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-unused-expressions": 2,
        "no-void": 0,
        "no-warning-comments": 2,
        "no-with": 2,
        "prefer-arrow-callback": 2,
        "radix": 2,
        "vars-on-top": 0,
        "wrap-iife": 2,
        "yoda": 2,
        // Strict Mode
        "strict": [2, "global"],
        // Variables
        "prefer-const": 2,
        "no-catch-shadow": 2,
        "no-const-assign": 2,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-unused-vars": 2,
        "no-use-before-define": 2,
        "no-var": 2,
        // Stylistic Issues
        //数字为空格缩进
        "indent": [2, 4, {
          "SwitchCase": 1
        }],
        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": 2,
        "brace-style": 2,
        "camelcase": 0,
        "comma-spacing": 2,
        "comma-style": 2,
        "consistent-this": 0,
        "eol-last": 2,
        "func-names": 0,
        "func-style": 0,
        "key-spacing": [2, {
          "beforeColon": false,
          "afterColon": true
        }],
        "max-nested-callbacks": 0,
        "new-cap": 2,
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-inline-comments": 0,
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "semi-spacing": [2, {
          "before": false,
          "after": true
        }],
        "no-spaced-func": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-multiple-empty-lines": 2,
        "no-underscore-dangle": 0,
        "one-var": 0,
        "operator-assignment": [2, "always"],
        "padded-blocks": [2, { "blocks": "never", "classes": "never", "switches": "never" }],
        "quotes": [2, "single"],
        "quote-props": [2, "as-needed"],
        "semi": [2, "always"],
        "sort-vars": [2, {"ignoreCase": true}],
        "keyword-spacing": 2,
        "space-before-blocks": 2,
        "object-curly-spacing": [2, "never"],
        "array-bracket-spacing": [2, "never"],
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "spaced-comment": 2,
        "wrap-regex": 0,
        // Legacy
        "max-depth": 0,
        "max-len": [2, 120, {
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true,
          "ignoreComments": true,
        }],
        "max-params": 0,
        "max-statements": 0,
        "no-plusplus": 0,
        "no-prototype-builtins": 2,
        "prefer-template": 2,
        "template-curly-spacing": [2, "never"],
    }
};