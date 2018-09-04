# Design patterns

## Creational patterns

#### Constructor pattern
Use to create new objets with their own object scope. 

`the new keyword` 
- Creates a brand new object
- Links to an object prototype 
- Binds 'this' to the new object scope
- Implicitly returns 'this'

Example of constructor pattern:

```
function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function() {
        return this.param1 + ' ' + this.param2;
    }
}
```


#### Module pattern
Simple way to encapsulate methods
Creates a "Toolbox" of functions to use

Example:

```
var Module = {
    method: function(){...},
    nextMethod: function(){...}
    return {
        method: method,
        nextMethod: nextMethod
    }
}
```

#### Factory pattern
A pattern used to simplify object creation
- Creating different objects based on need (different types of objects)
- Repository creation

Example:

```

```