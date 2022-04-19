/**
 * ? 对象相关知识学习
 */


/**
 * # 对象描述符
 * configurable -> configurable描述符为true时，表示该属性的修饰符可以被更改也可以被删除（默认值为：false）
 * enumerable -> enumerable描述符表示该属性是否可以被枚举，换句话说就是能不能被如Object.keys、for...in之类的捕捉到（默认值为：false）
 * value -> value显而易见就是表示该属性的value值（默认值为：undefined）
 * writable -> writable描述符为表示能否被赋值运算符'='改变（默认值为：false）
 * get -> 属性的getter函数，如果没有则为undefined。访问属性时回调用getter函数，返回值被用作属性的值（默认值为：undefined）
 * set -> 属性的setter函数，如果没有则为undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。(默认值为：undefined)
 * 
 * 简单的将描述符分类的话可以分为：数据描述符 和 存取描述符
 * 数据描述符：configurable、enumerable、writable 和 value
 * 存取描述符：configurable、enumerable、get 和 set
 * 由此可以看出来configurable 和 enumerable是数据描述符和存取描述共有的
 * 注意：一个属性只能有一种描述符
 */


