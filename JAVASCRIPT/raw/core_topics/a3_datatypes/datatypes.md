# JS 
- DYnamic :: Not strictly associated with any particular value.
- Weakly Typed Language :: Allows implicit type conversion. Implicit coercion is useful, dont throw error but potential footgun 
- All types except objects are primitive values. All primitive values can be tested with `typeof operator` except null, 
- 7 :: Primitive AND 1 :: Object
- Types
      [TYPE]        [TYPEOF]        [OBJECT WRAPPER,            [Remarks]
                                     for attaching methods] 
    - null          ("object")      NA                          Used very less in core language, 
                                                                used to differentiate from undefined
                                                                .
    - undefined     ("undefined")   NA                          Function default return value
                                                                Accessing nonexisting object property
                                                                Variable declared without initialization
                                                                .
    - number        ("number")      Number                      Number.MAX_VALUE
                                                                Number.MAX_SAFE_INTEGER
                                                                Number.MIN_VALUE
                                                                Number.MIN_SAFE_INTEGER
                                                                Infinity (Number.POSITIVE_INFINITY)
                                                                -Infinity (Number.NEGATIVE_INFINITY)
                                                                NaN(result of an arithmetic operation cannot be expressed as a number)
                                                                .
    - bigint        ("bigint")      BigInt                      Safely store and operate on integers beyond safe range ↑↑↑
                                                                Number.MAX_SAFE_INTEGER+1 === Number.MAX_SAFE_INTEGER+2 // true
                                                                const x = BigInt(Number.MAX_SAFE_INTEGER);
                                                                x+1n === x+2n; // false
                                                                1n+23; // TypeError
                                                                .
    - string        ("string")      String                      UTF-16 (Unicode 16 bit)
                                                                Textual data encoded as 16 bit unsinged integer value
                                                                Strings are immutable.
                                                                .
    - boolean       ("boolean")     Boolean                     Logical entity
                                                                true AND false
                                                                Used for conditionals like do while, if, ternary
                                                                .
    - symbol        ("symbol")      Symbol                      Unique and immutable primitve value.
                                                                Known as "atoms" in some other program. lang.
                                                                Unique property keys for not clashing
- Objects
    - A collection of properties(key value pairs). Property keys are either string or symbol. Values can be anything. 
    - A value in memory which is possibly referenced by an identifier
    - Only mutable values.
    - Functions are nothing but callable objects.
- pass by value or pass by reference [https://github.com/jinkya/notes/blob/master/passByValueOrPassByReference.md]
- 