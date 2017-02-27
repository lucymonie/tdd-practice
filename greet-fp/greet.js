var greet = function (name) {



}


var compose = function () {
  var args = Array.from(arguments);
  return function (x) {
    return args.reduce(function (version, update) {
      return update(version);
    }, x)
  }
}

//SayHello : String | Array -> String
var sayHello = function (name) {
  return typeof name === 'object'
  ? 'Hello, ' + name[0]
  : 'Hello, ' + name;
}

//NoName : Null -> String
var noName = function (name) {
  return 'my friend';
}

//TwoNames : Array String -> String
var twoNames = function (names) {
  return names[0] + ' and ' + names[1];
}

//ManyNames : Array String -> String
var manyNames = function (names) {
  var str = '';
    for(i = 0; i < names.length-1; i++) {
      str += names[i] + ', ';
    }
    str += 'and ' + names[names.length-1];
  return str;
}

//Shout : String -> String
var shout = function (x) {
  return x.toUpperCase() + '!';
}

//SeparateByCase : Array String -> Array Array
var separateByCase = function (names) {
  var lower = names.filter(function(name) {return name !== name.toUpperCase()});
  var upper = names.filter(function(name) {return name === name.toUpperCase()});
  return [lower, upper];
}

//ConstructMultiCaseGreeting : Array Array -> String
var constructMultiCaseGreeting = function (names) {
  var greetings = names.map(function(caseType) {
    return (caseType.length === 1) ? sayHello(caseType)
          : (caseType.length === 2) ? sayHello(twoNames(caseType))
          : (caseType.length > 2) ? sayHello(manyNames(caseType))
          : '';
  });
  return (greetings[0].length && greetings[1].length) ? greetings[0] + '. AND ' + shout(greetings[1])
         : (greetings[0].length) ? greetings[0]
         : shout(greetings[1]);
}

//CheckMultiNameString : Array -> Array String
var checkMultiNameString = function (name) {
  for (i = 0; i < name.length; i++) {
    if (stringHasComma(name[i]) && !ignoreComma(name[i])) {
      var arr = splitNames(name[i]);
      name = insertSplitNames(arr, name, i);
    } else if (ignoreComma(name[i])) {
      name[i] = trimString(name[i]);
    }
  }
  return name;
}

//StringHasComma : String -> Boolean
var stringHasComma = function (name) {
  return name.indexOf(',') !== -1;
}

//IgnoreComma : String -> Boolean
var ignoreComma = function (str) {
  var re = /(["'])((?:\\\1|(?!\1).)+)\1/;
  return re.test(str);
}

//SplitNames : String -> Array
var splitNames = function (str) {
  return str.split(',')
}

//TrimString : String -> String
var trimString = function (str) {
  return str.slice(1, str.length-1);
}

//InsertSplitNames : Array, Array String, Int -> Array
var insertSplitNames = function (splitNames, allNames, i) {
  allNames.splice(i,1);
  splitNames.map(function(name) {
    name = name.trim();
    allNames.splice(i,0,name);
    i++;
  });
  return allNames;
}
