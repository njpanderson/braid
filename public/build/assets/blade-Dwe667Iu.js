const t=Object.freeze({displayName:"JavaScript",name:"javascript",patterns:[{include:"#directives"},{include:"#statements"},{include:"#shebang"}],repository:{"access-modifier":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"storage.modifier.js"},"after-operator-block-as-object-literal":{begin:"(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^yield|[^\\._$[:alnum:]]yield|^throw|[^\\._$[:alnum:]]throw|^in|[^\\._$[:alnum:]]in|^of|[^\\._$[:alnum:]]of|^typeof|[^\\._$[:alnum:]]typeof|&&|\\|\\||\\*)\\s*(\\{)",beginCaptures:{1:{name:"punctuation.definition.block.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},name:"meta.objectliteral.js",patterns:[{include:"#object-member"}]},"array-binding-pattern":{begin:"(?:(\\.\\.\\.)\\s*)?(\\[)",beginCaptures:{1:{name:"keyword.operator.rest.js"},2:{name:"punctuation.definition.binding-pattern.array.js"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.binding-pattern.array.js"}},patterns:[{include:"#binding-element"},{include:"#punctuation-comma"}]},"array-binding-pattern-const":{begin:"(?:(\\.\\.\\.)\\s*)?(\\[)",beginCaptures:{1:{name:"keyword.operator.rest.js"},2:{name:"punctuation.definition.binding-pattern.array.js"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.binding-pattern.array.js"}},patterns:[{include:"#binding-element-const"},{include:"#punctuation-comma"}]},"array-literal":{begin:"\\s*(\\[)",beginCaptures:{1:{name:"meta.brace.square.js"}},end:"\\]",endCaptures:{0:{name:"meta.brace.square.js"}},name:"meta.array.literal.js",patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},"arrow-function":{patterns:[{captures:{1:{name:"storage.modifier.async.js"},2:{name:"variable.parameter.js"}},match:"(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(?==>)",name:"meta.arrow.js"},{begin:`(?x) (?:
(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)
)? ((?<![})!\\]])\\s*
(?=

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
)
)`,beginCaptures:{1:{name:"storage.modifier.async.js"}},end:"(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",name:"meta.arrow.js",patterns:[{include:"#comment"},{include:"#type-parameters"},{include:"#function-parameters"},{include:"#arrow-return-type"},{include:"#possibly-arrow-return-type"}]},{begin:"=>",beginCaptures:{0:{name:"storage.type.function.arrow.js"}},end:"((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])",name:"meta.arrow.js",patterns:[{include:"#single-line-comment-consuming-line-ending"},{include:"#decl-block"},{include:"#expression"}]}]},"arrow-return-type":{begin:"(?<=\\))\\s*(:)",beginCaptures:{1:{name:"keyword.operator.type.annotation.js"}},end:"(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",name:"meta.return.type.arrow.js",patterns:[{include:"#arrow-return-type-body"}]},"arrow-return-type-body":{patterns:[{begin:"(?<=[:])(?=\\s*\\{)",end:"(?<=\\})",patterns:[{include:"#type-object"}]},{include:"#type-predicate-operator"},{include:"#type"}]},"async-modifier":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"storage.modifier.async.js"},"binding-element":{patterns:[{include:"#comment"},{include:"#string"},{include:"#numeric-literal"},{include:"#regex"},{include:"#object-binding-pattern"},{include:"#array-binding-pattern"},{include:"#destructuring-variable-rest"},{include:"#variable-initializer"}]},"binding-element-const":{patterns:[{include:"#comment"},{include:"#string"},{include:"#numeric-literal"},{include:"#regex"},{include:"#object-binding-pattern-const"},{include:"#array-binding-pattern-const"},{include:"#destructuring-variable-rest-const"},{include:"#variable-initializer"}]},"boolean-literal":{patterns:[{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"constant.language.boolean.true.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"constant.language.boolean.false.js"}]},brackets:{patterns:[{begin:"{",end:"}|(?=\\*/)",patterns:[{include:"#brackets"}]},{begin:"\\[",end:"\\]|(?=\\*/)",patterns:[{include:"#brackets"}]}]},cast:{patterns:[{include:"#jsx"}]},"class-declaration":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.modifier.js"},4:{name:"storage.type.class.js"}},end:"(?<=\\})",name:"meta.class.js",patterns:[{include:"#class-declaration-or-expression-patterns"}]},"class-declaration-or-expression-patterns":{patterns:[{include:"#comment"},{include:"#class-or-interface-heritage"},{captures:{0:{name:"entity.name.type.class.js"}},match:"[_$[:alpha:]][_$[:alnum:]]*"},{include:"#type-parameters"},{include:"#class-or-interface-body"}]},"class-expression":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(class)\\b(?=\\s+|[<{]|\\/[\\/*])",beginCaptures:{1:{name:"storage.modifier.js"},2:{name:"storage.type.class.js"}},end:"(?<=\\})",name:"meta.class.js",patterns:[{include:"#class-declaration-or-expression-patterns"}]},"class-or-interface-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.block.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},patterns:[{include:"#comment"},{include:"#decorator"},{begin:"(?<=:)\\s*",end:"(?=\\s|[;),}\\]:\\-\\+]|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",patterns:[{include:"#expression"}]},{include:"#method-declaration"},{include:"#indexer-declaration"},{include:"#field-declaration"},{include:"#string"},{include:"#type-annotation"},{include:"#variable-initializer"},{include:"#access-modifier"},{include:"#property-accessor"},{include:"#async-modifier"},{include:"#after-operator-block-as-object-literal"},{include:"#decl-block"},{include:"#expression"},{include:"#punctuation-comma"},{include:"#punctuation-semicolon"}]},"class-or-interface-heritage":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(extends|implements)\\b)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{1:{name:"storage.modifier.js"}},end:"(?=\\{)",patterns:[{include:"#comment"},{include:"#class-or-interface-heritage"},{include:"#type-parameters"},{include:"#expressionWithoutIdentifiers"},{captures:{1:{name:"entity.name.type.module.js"},2:{name:"punctuation.accessor.js"},3:{name:"punctuation.accessor.optional.js"}},match:"([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\??\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*)"},{captures:{1:{name:"entity.other.inherited-class.js"}},match:"([_$[:alpha:]][_$[:alnum:]]*)"},{include:"#expressionPunctuations"}]},comment:{patterns:[{begin:"/\\*\\*(?!/)",beginCaptures:{0:{name:"punctuation.definition.comment.js"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.js"}},name:"comment.block.documentation.js",patterns:[{include:"#docblock"}]},{begin:"(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?",beginCaptures:{1:{name:"punctuation.definition.comment.js"},2:{name:"storage.type.internaldeclaration.js"},3:{name:"punctuation.decorator.internaldeclaration.js"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.js"}},name:"comment.block.js"},{begin:"(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.js"},2:{name:"comment.line.double-slash.js"},3:{name:"punctuation.definition.comment.js"},4:{name:"storage.type.internaldeclaration.js"},5:{name:"punctuation.decorator.internaldeclaration.js"}},contentName:"comment.line.double-slash.js",end:"(?=$)"}]},"control-statement":{patterns:[{include:"#switch-statement"},{include:"#for-loop"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.control.trycatch.js"},{captures:{1:{name:"keyword.control.loop.js"},2:{name:"entity.name.label.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.control.loop.js"},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{0:{name:"keyword.control.flow.js"}},end:"(?=[;}]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",patterns:[{include:"#expression"}]},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.control.switch.js"},{include:"#if-statement"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.control.conditional.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.control.with.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.control.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.other.debugger.js"}]},"decl-block":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.block.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},name:"meta.block.js",patterns:[{include:"#statements"}]},declaration:{patterns:[{include:"#decorator"},{include:"#var-expr"},{include:"#function-declaration"},{include:"#class-declaration"},{include:"#interface-declaration"},{include:"#enum-declaration"},{include:"#namespace-declaration"},{include:"#type-alias-declaration"},{include:"#import-equals-declaration"},{include:"#import-declaration"},{include:"#export-declaration"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"storage.modifier.js"}]},decorator:{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@",beginCaptures:{0:{name:"punctuation.decorator.js"}},end:"(?=\\s)",name:"meta.decorator.js",patterns:[{include:"#expression"}]},"destructuring-const":{patterns:[{begin:"(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",name:"meta.object-binding-pattern-variable.js",patterns:[{include:"#object-binding-pattern-const"},{include:"#type-annotation"},{include:"#comment"}]},{begin:"(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)",end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",name:"meta.array-binding-pattern-variable.js",patterns:[{include:"#array-binding-pattern-const"},{include:"#type-annotation"},{include:"#comment"}]}]},"destructuring-parameter":{patterns:[{begin:"(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\{)",beginCaptures:{1:{name:"keyword.operator.rest.js"},2:{name:"punctuation.definition.binding-pattern.object.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.binding-pattern.object.js"}},name:"meta.parameter.object-binding-pattern.js",patterns:[{include:"#parameter-object-binding-element"}]},{begin:"(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\[)",beginCaptures:{1:{name:"keyword.operator.rest.js"},2:{name:"punctuation.definition.binding-pattern.array.js"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.binding-pattern.array.js"}},name:"meta.paramter.array-binding-pattern.js",patterns:[{include:"#parameter-binding-element"},{include:"#punctuation-comma"}]}]},"destructuring-parameter-rest":{captures:{1:{name:"keyword.operator.rest.js"},2:{name:"variable.parameter.js"}},match:"(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"},"destructuring-variable":{patterns:[{begin:"(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",name:"meta.object-binding-pattern-variable.js",patterns:[{include:"#object-binding-pattern"},{include:"#type-annotation"},{include:"#comment"}]},{begin:"(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)",end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",name:"meta.array-binding-pattern-variable.js",patterns:[{include:"#array-binding-pattern"},{include:"#type-annotation"},{include:"#comment"}]}]},"destructuring-variable-rest":{captures:{1:{name:"keyword.operator.rest.js"},2:{name:"meta.definition.variable.js variable.other.readwrite.js"}},match:"(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"},"destructuring-variable-rest-const":{captures:{1:{name:"keyword.operator.rest.js"},2:{name:"meta.definition.variable.js variable.other.constant.js"}},match:"(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"},directives:{begin:"^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)",beginCaptures:{1:{name:"punctuation.definition.comment.js"}},end:"(?=$)",name:"comment.line.triple-slash.directive.js",patterns:[{begin:"(<)(reference|amd-dependency|amd-module)",beginCaptures:{1:{name:"punctuation.definition.tag.directive.js"},2:{name:"entity.name.tag.directive.js"}},end:"/>",endCaptures:{0:{name:"punctuation.definition.tag.directive.js"}},name:"meta.tag.js",patterns:[{match:"path|types|no-default-lib|lib|name|resolution-mode",name:"entity.other.attribute-name.directive.js"},{match:"=",name:"keyword.operator.assignment.js"},{include:"#string"}]}]},docblock:{patterns:[{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"constant.language.access-type.jsdoc"}},match:`(?x)
((@)(?:access|api))
\\s+
(private|protected|public)
\\b`},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"entity.name.type.instance.jsdoc"},4:{name:"punctuation.definition.bracket.angle.begin.jsdoc"},5:{name:"constant.other.email.link.underline.jsdoc"},6:{name:"punctuation.definition.bracket.angle.end.jsdoc"}},match:`(?x)
((@)author)
\\s+
(
[^@\\s<>*/]
(?:[^@<>*/]|\\*[^/])*
)
(?:
\\s*
(<)
([^>\\s]+)
(>)
)?`},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"entity.name.type.instance.jsdoc"},4:{name:"keyword.operator.control.jsdoc"},5:{name:"entity.name.type.instance.jsdoc"}},match:`(?x)
((@)borrows) \\s+
((?:[^@\\s*/]|\\*[^/])+)
\\s+ (as) \\s+
((?:[^@\\s*/]|\\*[^/])+)`},{begin:"((@)example)\\s+",beginCaptures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"}},end:"(?=@|\\*/)",name:"meta.example.jsdoc",patterns:[{match:"^\\s\\*\\s+"},{begin:"\\G(<)caption(>)",beginCaptures:{0:{name:"entity.name.tag.inline.jsdoc"},1:{name:"punctuation.definition.bracket.angle.begin.jsdoc"},2:{name:"punctuation.definition.bracket.angle.end.jsdoc"}},contentName:"constant.other.description.jsdoc",end:"(</)caption(>)|(?=\\*/)",endCaptures:{0:{name:"entity.name.tag.inline.jsdoc"},1:{name:"punctuation.definition.bracket.angle.begin.jsdoc"},2:{name:"punctuation.definition.bracket.angle.end.jsdoc"}}},{captures:{0:{name:"source.embedded.js"}},match:"[^\\s@*](?:[^*]|\\*[^/])*"}]},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"constant.language.symbol-type.jsdoc"}},match:"(?x) ((@)kind) \\s+ (class|constant|event|external|file|function|member|mixin|module|namespace|typedef) \\b"},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"variable.other.link.underline.jsdoc"},4:{name:"entity.name.type.instance.jsdoc"}},match:`(?x)
((@)see)
\\s+
(?:

(
(?=https?://)
(?:[^\\s*]|\\*[^/])+
)
|

(
(?!

https?://
|

(?:\\[[^\\[\\]]*\\])?
{@(?:link|linkcode|linkplain|tutorial)\\b
)

(?:[^@\\s*/]|\\*[^/])+
)
)`},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"variable.other.jsdoc"}},match:`(?x)
((@)template)
\\s+
# One or more valid identifiers
(
[A-Za-z_$]
[\\w$.\\[\\]]*
(?:
\\s* , \\s*
[A-Za-z_$]
[\\w$.\\[\\]]*
)*
)`},{begin:"(?x)((@)template)\\s+(?={)",beginCaptures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"}},end:"(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",patterns:[{include:"#jsdoctype"},{match:"([A-Za-z_$][\\w$.\\[\\]]*)",name:"variable.other.jsdoc"}]},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"variable.other.jsdoc"}},match:`(?x)
(
(@)
(?:arg|argument|const|constant|member|namespace|param|var)
)
\\s+
(
[A-Za-z_$]
[\\w$.\\[\\]]*
)`},{begin:"((@)typedef)\\s+(?={)",beginCaptures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"}},end:"(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",patterns:[{include:"#jsdoctype"},{match:"(?:[^@\\s*/]|\\*[^/])+",name:"entity.name.type.instance.jsdoc"}]},{begin:"((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)",beginCaptures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"}},end:"(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",patterns:[{include:"#jsdoctype"},{match:"([A-Za-z_$][\\w$.\\[\\]]*)",name:"variable.other.jsdoc"},{captures:{1:{name:"punctuation.definition.optional-value.begin.bracket.square.jsdoc"},2:{name:"keyword.operator.assignment.jsdoc"},3:{name:"source.embedded.js"},4:{name:"punctuation.definition.optional-value.end.bracket.square.jsdoc"},5:{name:"invalid.illegal.syntax.jsdoc"}},match:`(?x)
(\\[)\\s*
[\\w$]+
(?:
(?:\\[\\])?
\\.
[\\w$]+
)*
(?:
\\s*
(=)
\\s*
(

(?>
"(?:(?:\\*(?!/))|(?:\\\\(?!"))|[^*\\\\])*?" |
'(?:(?:\\*(?!/))|(?:\\\\(?!'))|[^*\\\\])*?' |
\\[ (?:(?:\\*(?!/))|[^*])*? \\] |
(?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*
)*
)
)?
\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))`,name:"variable.other.jsdoc"}]},{begin:`(?x)
(
(@)
(?:define|enum|exception|export|extends|lends|implements|modifies
|namespace|private|protected|returns?|satisfies|suppress|this|throws|type
|yields?)
)
\\s+(?={)`,beginCaptures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"}},end:"(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",patterns:[{include:"#jsdoctype"}]},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"entity.name.type.instance.jsdoc"}},match:`(?x)
(
(@)
(?:alias|augments|callback|constructs|emits|event|fires|exports?
|extends|external|function|func|host|lends|listens|interface|memberof!?
|method|module|mixes|mixin|name|requires|see|this|typedef|uses)
)
\\s+
(
(?:
[^{}@\\s*] | \\*[^/]
)+
)`},{begin:`((@)(?:default(?:value)?|license|version))\\s+(([''"]))`,beginCaptures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"variable.other.jsdoc"},4:{name:"punctuation.definition.string.begin.jsdoc"}},contentName:"variable.other.jsdoc",end:"(\\3)|(?=$|\\*/)",endCaptures:{0:{name:"variable.other.jsdoc"},1:{name:"punctuation.definition.string.end.jsdoc"}}},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"},3:{name:"variable.other.jsdoc"}},match:"((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)"},{captures:{1:{name:"punctuation.definition.block.tag.jsdoc"}},match:"(?x) (@) (?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles |callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright |default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception |exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func |function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc |inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method |mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects |override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected |public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary |suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation |version|virtual|writeOnce|yields?) \\b",name:"storage.type.class.jsdoc"},{include:"#inline-tags"},{captures:{1:{name:"storage.type.class.jsdoc"},2:{name:"punctuation.definition.block.tag.jsdoc"}},match:"((@)(?:[_$[:alpha:]][_$[:alnum:]]*))(?=\\s+)"}]},"enum-declaration":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$[:alpha:]][_$[:alnum:]]*)",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.modifier.js"},4:{name:"storage.type.enum.js"},5:{name:"entity.name.type.enum.js"}},end:"(?<=\\})",name:"meta.enum.declaration.js",patterns:[{include:"#comment"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.block.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},patterns:[{include:"#comment"},{begin:"([_$[:alpha:]][_$[:alnum:]]*)",beginCaptures:{0:{name:"variable.other.enummember.js"}},end:"(?=,|\\}|$)",patterns:[{include:"#comment"},{include:"#variable-initializer"}]},{begin:"(?=((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))",end:"(?=,|\\}|$)",patterns:[{include:"#string"},{include:"#array-literal"},{include:"#comment"},{include:"#variable-initializer"}]},{include:"#punctuation-comma"}]}]},"export-declaration":{patterns:[{captures:{1:{name:"keyword.control.export.js"},2:{name:"keyword.control.as.js"},3:{name:"storage.type.namespace.js"},4:{name:"entity.name.type.module.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$[:alpha:]][_$[:alnum:]]*)"},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"keyword.control.type.js"},3:{name:"keyword.operator.assignment.js"},4:{name:"keyword.control.default.js"}},end:"(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",name:"meta.export.default.js",patterns:[{include:"#interface-declaration"},{include:"#expression"}]},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?\\b(?!(\\$)|(\\s*:))((?=\\s*[\\{*])|((?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s|,))(?!\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"keyword.control.type.js"}},end:"(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",name:"meta.export.js",patterns:[{include:"#import-export-declaration"}]}]},expression:{patterns:[{include:"#expressionWithoutIdentifiers"},{include:"#identifiers"},{include:"#expressionPunctuations"}]},"expression-inside-possibly-arrow-parens":{patterns:[{include:"#expressionWithoutIdentifiers"},{include:"#comment"},{include:"#string"},{include:"#decorator"},{include:"#destructuring-parameter"},{captures:{1:{name:"storage.modifier.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)"},{captures:{1:{name:"storage.modifier.js"},2:{name:"keyword.operator.rest.js"},3:{name:"entity.name.function.js variable.language.this.js"},4:{name:"entity.name.function.js"},5:{name:"keyword.operator.optional.js"}},match:`(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*
# function assignment |
(=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)) |
# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>
(:\\s*(
(<) |
([(]\\s*(
([)]) |
(\\.\\.\\.) |
([_$[:alnum:]]+\\s*(
([:,?=])|
([)]\\s*=>)
))
))
)) |
(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |
(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |
(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)))`},{captures:{1:{name:"storage.modifier.js"},2:{name:"keyword.operator.rest.js"},3:{name:"variable.parameter.js variable.language.this.js"},4:{name:"variable.parameter.js"},5:{name:"keyword.operator.optional.js"}},match:"(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*[:,]|$)"},{include:"#type-annotation"},{include:"#variable-initializer"},{match:",",name:"punctuation.separator.parameter.js"},{include:"#identifiers"},{include:"#expressionPunctuations"}]},"expression-operators":{patterns:[{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.control.flow.js"},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)",beginCaptures:{1:{name:"keyword.control.flow.js"}},end:"\\*",endCaptures:{0:{name:"keyword.generator.asterisk.js"}},patterns:[{include:"#comment"}]},{captures:{1:{name:"keyword.control.flow.js"},2:{name:"keyword.generator.asterisk.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.operator.expression.delete.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",name:"keyword.operator.expression.in.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",name:"keyword.operator.expression.of.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.operator.expression.instanceof.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.operator.new.js"},{include:"#typeof-operator"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.operator.expression.void.js"},{captures:{1:{name:"keyword.control.as.js"},2:{name:"storage.modifier.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))"},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",beginCaptures:{1:{name:"keyword.control.as.js"},2:{name:"keyword.control.satisfies.js"}},end:"(?=^|[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\s+)|(\\s+\\<))",patterns:[{include:"#type"}]},{match:"\\.\\.\\.",name:"keyword.operator.spread.js"},{match:"\\*=|(?<!\\()/=|%=|\\+=|\\-=",name:"keyword.operator.assignment.compound.js"},{match:"\\&=|\\^=|<<=|>>=|>>>=|\\|=",name:"keyword.operator.assignment.compound.bitwise.js"},{match:"<<|>>>|>>",name:"keyword.operator.bitwise.shift.js"},{match:"===|!==|==|!=",name:"keyword.operator.comparison.js"},{match:"<=|>=|<>|<|>",name:"keyword.operator.relational.js"},{captures:{1:{name:"keyword.operator.logical.js"},2:{name:"keyword.operator.assignment.compound.js"},3:{name:"keyword.operator.arithmetic.js"}},match:"(?<=[_$[:alnum:]])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))"},{match:"\\!|&&|\\|\\||\\?\\?",name:"keyword.operator.logical.js"},{match:"\\&|~|\\^|\\|",name:"keyword.operator.bitwise.js"},{match:"\\=",name:"keyword.operator.assignment.js"},{match:"--",name:"keyword.operator.decrement.js"},{match:"\\+\\+",name:"keyword.operator.increment.js"},{match:"%|\\*|/|-|\\+",name:"keyword.operator.arithmetic.js"},{begin:"(?<=[_$[:alnum:])\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))",end:"(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))",endCaptures:{1:{name:"keyword.operator.assignment.compound.js"},2:{name:"keyword.operator.arithmetic.js"}},patterns:[{include:"#comment"}]},{captures:{1:{name:"keyword.operator.assignment.compound.js"},2:{name:"keyword.operator.arithmetic.js"}},match:"(?<=[_$[:alnum:])\\]])\\s*(?:(/=)|(?:(/)(?![/*])))"}]},expressionPunctuations:{patterns:[{include:"#punctuation-comma"},{include:"#punctuation-accessor"}]},expressionWithoutIdentifiers:{patterns:[{include:"#jsx"},{include:"#string"},{include:"#regex"},{include:"#comment"},{include:"#function-expression"},{include:"#class-expression"},{include:"#arrow-function"},{include:"#paren-expression-possibly-arrow"},{include:"#cast"},{include:"#ternary-expression"},{include:"#new-expr"},{include:"#instanceof-expr"},{include:"#object-literal"},{include:"#expression-operators"},{include:"#function-call"},{include:"#literal"},{include:"#support-objects"},{include:"#paren-expression"}]},"field-declaration":{begin:`(?x)(?<!\\()(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s+)?(?=\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|\\}|$))`,beginCaptures:{1:{name:"storage.modifier.js"}},end:`(?x)(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})`,name:"meta.field.declaration.js",patterns:[{include:"#variable-initializer"},{include:"#type-annotation"},{include:"#string"},{include:"#array-literal"},{include:"#numeric-literal"},{include:"#comment"},{captures:{1:{name:"meta.definition.property.js entity.name.function.js"},2:{name:"keyword.operator.optional.js"},3:{name:"keyword.operator.definiteassignment.js"}},match:`(?x)(\\#?[_$[:alpha:]][_$[:alnum:]]*)(?:(\\?)|(\\!))?(?=\\s*\\s*
# function assignment |
(=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)) |
# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>
(:\\s*(
(<) |
([(]\\s*(
([)]) |
(\\.\\.\\.) |
([_$[:alnum:]]+\\s*(
([:,?=])|
([)]\\s*=>)
))
))
)) |
(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |
(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |
(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)))`},{match:"\\#?[_$[:alpha:]][_$[:alnum:]]*",name:"meta.definition.property.js variable.object.property.js"},{match:"\\?",name:"keyword.operator.optional.js"},{match:"\\!",name:"keyword.operator.definiteassignment.js"}]},"for-loop":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())",beginCaptures:{0:{name:"keyword.control.loop.js"}},end:"(?<=\\))",patterns:[{include:"#comment"},{match:"await",name:"keyword.control.loop.js"},{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"#var-expr"},{include:"#expression"},{include:"#punctuation-semicolon"}]}]},"function-body":{patterns:[{include:"#comment"},{include:"#type-parameters"},{include:"#function-parameters"},{include:"#return-type"},{include:"#type-function-return-type"},{include:"#decl-block"},{match:"\\*",name:"keyword.generator.asterisk.js"}]},"function-call":{patterns:[{begin:"(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",end:"(?<=\\))(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",patterns:[{begin:"(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))",end:"(?=\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",name:"meta.function-call.js",patterns:[{include:"#function-call-target"}]},{include:"#comment"},{include:"#function-call-optionals"},{include:"#type-arguments"},{include:"#paren-expression"}]},{begin:"(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",end:"(?<=\\>)(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",patterns:[{begin:"(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))",end:"(?=(<\\s*[\\{\\[\\(]\\s*$))",name:"meta.function-call.js",patterns:[{include:"#function-call-target"}]},{include:"#comment"},{include:"#function-call-optionals"},{include:"#type-arguments"}]}]},"function-call-optionals":{patterns:[{match:"\\?\\.",name:"meta.function-call.js punctuation.accessor.optional.js"},{match:"\\!",name:"meta.function-call.js keyword.operator.definiteassignment.js"}]},"function-call-target":{patterns:[{include:"#support-function-call-identifiers"},{match:"(\\#?[_$[:alpha:]][_$[:alnum:]]*)",name:"entity.name.function.js"}]},"function-declaration":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.modifier.async.js"},4:{name:"storage.type.function.js"},5:{name:"keyword.generator.asterisk.js"},6:{name:"meta.definition.function.js entity.name.function.js"}},end:"(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|(?<=\\})",name:"meta.function.js",patterns:[{include:"#function-name"},{include:"#function-body"}]},"function-expression":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",beginCaptures:{1:{name:"storage.modifier.async.js"},2:{name:"storage.type.function.js"},3:{name:"keyword.generator.asterisk.js"},4:{name:"meta.definition.function.js entity.name.function.js"}},end:"(?=;)|(?<=\\})",name:"meta.function.expression.js",patterns:[{include:"#function-name"},{include:"#single-line-comment-consuming-line-ending"},{include:"#function-body"}]},"function-name":{match:"[_$[:alpha:]][_$[:alnum:]]*",name:"meta.definition.function.js entity.name.function.js"},"function-parameters":{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.js"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.js"}},name:"meta.parameters.js",patterns:[{include:"#function-parameters-body"}]},"function-parameters-body":{patterns:[{include:"#comment"},{include:"#string"},{include:"#decorator"},{include:"#destructuring-parameter"},{include:"#parameter-name"},{include:"#parameter-type-annotation"},{include:"#variable-initializer"},{match:",",name:"punctuation.separator.parameter.js"}]},identifiers:{patterns:[{include:"#object-identifiers"},{captures:{1:{name:"punctuation.accessor.js"},2:{name:"punctuation.accessor.optional.js"},3:{name:"entity.name.function.js"}},match:`(?x)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
))`},{captures:{1:{name:"punctuation.accessor.js"},2:{name:"punctuation.accessor.optional.js"},3:{name:"variable.other.constant.property.js"}},match:"(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])"},{captures:{1:{name:"punctuation.accessor.js"},2:{name:"punctuation.accessor.optional.js"},3:{name:"variable.other.property.js"}},match:"(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*)"},{match:"([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])",name:"variable.other.constant.js"},{match:"[_$[:alpha:]][_$[:alnum:]]*",name:"variable.other.readwrite.js"}]},"if-statement":{patterns:[{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\s*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\s*(?!\\{))",end:"(?=;|$|\\})",patterns:[{include:"#comment"},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\s*(\\()",beginCaptures:{1:{name:"keyword.control.conditional.js"},2:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"#expression"}]},{begin:"(?<=\\))\\s*\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"(/)([dgimsuy]*)",endCaptures:{1:{name:"punctuation.definition.string.end.js"},2:{name:"keyword.other.js"}},name:"string.regexp.js",patterns:[{include:"#regexp"}]},{include:"#statements"}]}]},"import-declaration":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type)(?!\\s+from))?(?!\\s*[:\\(])(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"keyword.control.import.js"},4:{name:"keyword.control.type.js"}},end:"(?<!^import|[^\\._$[:alnum:]]import)(?=;|$|^)",name:"meta.import.js",patterns:[{include:"#single-line-comment-consuming-line-ending"},{include:"#comment"},{include:"#string"},{begin:`(?<=^import|[^\\._$[:alnum:]]import)(?!\\s*["'])`,end:"\\bfrom\\b",endCaptures:{0:{name:"keyword.control.from.js"}},patterns:[{include:"#import-export-declaration"}]},{include:"#import-export-declaration"}]},"import-equals-declaration":{patterns:[{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(require)\\s*(\\()",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"keyword.control.import.js"},4:{name:"keyword.control.type.js"},5:{name:"variable.other.readwrite.alias.js"},6:{name:"keyword.operator.assignment.js"},7:{name:"keyword.control.require.js"},8:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},name:"meta.import-equals.external.js",patterns:[{include:"#comment"},{include:"#string"}]},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(?!require\\b)",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"keyword.control.import.js"},4:{name:"keyword.control.type.js"},5:{name:"variable.other.readwrite.alias.js"},6:{name:"keyword.operator.assignment.js"}},end:"(?=;|$|^)",name:"meta.import-equals.internal.js",patterns:[{include:"#single-line-comment-consuming-line-ending"},{include:"#comment"},{captures:{1:{name:"entity.name.type.module.js"},2:{name:"punctuation.accessor.js"},3:{name:"punctuation.accessor.optional.js"}},match:"([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"},{match:"([_$[:alpha:]][_$[:alnum:]]*)",name:"variable.other.readwrite.js"}]}]},"import-export-assert-clause":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\s*(\\{)",beginCaptures:{1:{name:"keyword.control.with.js"},2:{name:"keyword.control.assert.js"},3:{name:"punctuation.definition.block.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},patterns:[{include:"#comment"},{include:"#string"},{match:"(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",name:"meta.object-literal.key.js"},{match:":",name:"punctuation.separator.key-value.js"}]},"import-export-block":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.block.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},name:"meta.block.js",patterns:[{include:"#import-export-clause"}]},"import-export-clause":{patterns:[{include:"#comment"},{captures:{1:{name:"keyword.control.type.js"},2:{name:"keyword.control.default.js"},3:{name:"constant.language.import-export-all.js"},4:{name:"variable.other.readwrite.js"},5:{name:"keyword.control.as.js"},6:{name:"keyword.control.default.js"},7:{name:"variable.other.readwrite.alias.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$[:alpha:]][_$[:alnum:]]*)))\\s+(as)\\s+(?:(default(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$[:alpha:]][_$[:alnum:]]*))"},{include:"#punctuation-comma"},{match:"\\*",name:"constant.language.import-export-all.js"},{match:"\\b(default)\\b",name:"keyword.control.default.js"},{captures:{1:{name:"keyword.control.type.js"},2:{name:"variable.other.readwrite.alias.js"}},match:"(?:(\\btype)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)"}]},"import-export-declaration":{patterns:[{include:"#comment"},{include:"#string"},{include:"#import-export-block"},{match:"\\bfrom\\b",name:"keyword.control.from.js"},{include:"#import-export-assert-clause"},{include:"#import-export-clause"}]},"indexer-declaration":{begin:"(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=:)",beginCaptures:{1:{name:"storage.modifier.js"},2:{name:"meta.brace.square.js"},3:{name:"variable.parameter.js"}},end:"(\\])\\s*(\\?\\s*)?|$",endCaptures:{1:{name:"meta.brace.square.js"},2:{name:"keyword.operator.optional.js"}},name:"meta.indexer.declaration.js",patterns:[{include:"#type-annotation"}]},"indexer-mapped-type-declaration":{begin:"(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([+-])?(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s+(in)\\s+",beginCaptures:{1:{name:"keyword.operator.type.modifier.js"},2:{name:"storage.modifier.js"},3:{name:"meta.brace.square.js"},4:{name:"entity.name.type.js"},5:{name:"keyword.operator.expression.in.js"}},end:"(\\])([+-])?\\s*(\\?\\s*)?|$",endCaptures:{1:{name:"meta.brace.square.js"},2:{name:"keyword.operator.type.modifier.js"},3:{name:"keyword.operator.optional.js"}},name:"meta.indexer.mappedtype.declaration.js",patterns:[{captures:{1:{name:"keyword.control.as.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+"},{include:"#type"}]},"inline-tags":{patterns:[{captures:{1:{name:"punctuation.definition.bracket.square.begin.jsdoc"},2:{name:"punctuation.definition.bracket.square.end.jsdoc"}},match:"(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))",name:"constant.other.description.jsdoc"},{begin:"({)((@)(?:link(?:code|plain)?|tutorial))\\s*",beginCaptures:{1:{name:"punctuation.definition.bracket.curly.begin.jsdoc"},2:{name:"storage.type.class.jsdoc"},3:{name:"punctuation.definition.inline.tag.jsdoc"}},end:"}|(?=\\*/)",endCaptures:{0:{name:"punctuation.definition.bracket.curly.end.jsdoc"}},name:"entity.name.type.instance.jsdoc",patterns:[{captures:{1:{name:"variable.other.link.underline.jsdoc"},2:{name:"punctuation.separator.pipe.jsdoc"}},match:"\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?"},{captures:{1:{name:"variable.other.description.jsdoc"},2:{name:"punctuation.separator.pipe.jsdoc"}},match:"\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?"}]}]},"instanceof-expr":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{1:{name:"keyword.operator.expression.instanceof.js"}},end:"(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|(===|!==|==|!=)|(([\\&\\~\\^\\|]\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s+instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",patterns:[{include:"#type"}]},"interface-declaration":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(interface)\\b(?=\\s+|/[/*])",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.modifier.js"},4:{name:"storage.type.interface.js"}},end:"(?<=\\})",name:"meta.interface.js",patterns:[{include:"#comment"},{include:"#class-or-interface-heritage"},{captures:{0:{name:"entity.name.type.interface.js"}},match:"[_$[:alpha:]][_$[:alnum:]]*"},{include:"#type-parameters"},{include:"#class-or-interface-body"}]},jsdoctype:{patterns:[{begin:"\\G({)",beginCaptures:{0:{name:"entity.name.type.instance.jsdoc"},1:{name:"punctuation.definition.bracket.curly.begin.jsdoc"}},contentName:"entity.name.type.instance.jsdoc",end:"((}))\\s*|(?=\\*/)",endCaptures:{1:{name:"entity.name.type.instance.jsdoc"},2:{name:"punctuation.definition.bracket.curly.end.jsdoc"}},patterns:[{include:"#brackets"}]}]},jsx:{patterns:[{include:"#jsx-tag-without-attributes-in-expression"},{include:"#jsx-tag-in-expression"}]},"jsx-children":{patterns:[{include:"#jsx-tag-without-attributes"},{include:"#jsx-tag"},{include:"#jsx-evaluated-code"},{include:"#jsx-entities"}]},"jsx-entities":{patterns:[{captures:{1:{name:"punctuation.definition.entity.js"},3:{name:"punctuation.definition.entity.js"}},match:"(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.js"}]},"jsx-evaluated-code":{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.embedded.begin.js"}},contentName:"meta.embedded.expression.js",end:"\\}",endCaptures:{0:{name:"punctuation.section.embedded.end.js"}},patterns:[{include:"#expression"}]},"jsx-string-double-quoted":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.double.js",patterns:[{include:"#jsx-entities"}]},"jsx-string-single-quoted":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.single.js",patterns:[{include:"#jsx-entities"}]},"jsx-tag":{begin:"(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",end:"(/>)|(?:(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",endCaptures:{1:{name:"punctuation.definition.tag.end.js"},2:{name:"punctuation.definition.tag.begin.js"},3:{name:"entity.name.tag.namespace.js"},4:{name:"punctuation.separator.namespace.js"},5:{name:"entity.name.tag.js"},6:{name:"support.class.component.js"},7:{name:"punctuation.definition.tag.end.js"}},name:"meta.tag.js",patterns:[{begin:"(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.js"},2:{name:"entity.name.tag.namespace.js"},3:{name:"punctuation.separator.namespace.js"},4:{name:"entity.name.tag.js"},5:{name:"support.class.component.js"}},end:"(?=[/]?>)",patterns:[{include:"#comment"},{include:"#type-arguments"},{include:"#jsx-tag-attributes"}]},{begin:"(>)",beginCaptures:{1:{name:"punctuation.definition.tag.end.js"}},contentName:"meta.jsx.children.js",end:"(?=</)",patterns:[{include:"#jsx-children"}]}]},"jsx-tag-attribute-assignment":{match:`=(?=\\s*(?:'|"|{|/\\*|//|\\n))`,name:"keyword.operator.assignment.js"},"jsx-tag-attribute-name":{captures:{1:{name:"entity.other.attribute-name.namespace.js"},2:{name:"punctuation.separator.namespace.js"},3:{name:"entity.other.attribute-name.js"}},match:`(?x)
\\s*
(?:([_$[:alpha:]][-_$[:alnum:].]*)(:))?
([_$[:alpha:]][-_$[:alnum:]]*)
(?=\\s|=|/?>|/\\*|//)`},"jsx-tag-attributes":{begin:"\\s+",end:"(?=[/]?>)",name:"meta.tag.attributes.js",patterns:[{include:"#comment"},{include:"#jsx-tag-attribute-name"},{include:"#jsx-tag-attribute-assignment"},{include:"#jsx-string-double-quoted"},{include:"#jsx-string-single-quoted"},{include:"#jsx-evaluated-code"},{include:"#jsx-tag-attributes-illegal"}]},"jsx-tag-attributes-illegal":{match:"\\S+",name:"invalid.illegal.attribute.js"},"jsx-tag-in-expression":{begin:`(?x)
(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*
(?!<\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s+[^=>])|,))
(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))`,end:"(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",patterns:[{include:"#jsx-tag"}]},"jsx-tag-without-attributes":{begin:"(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.js"},2:{name:"entity.name.tag.namespace.js"},3:{name:"punctuation.separator.namespace.js"},4:{name:"entity.name.tag.js"},5:{name:"support.class.component.js"},6:{name:"punctuation.definition.tag.end.js"}},contentName:"meta.jsx.children.js",end:"(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.js"},2:{name:"entity.name.tag.namespace.js"},3:{name:"punctuation.separator.namespace.js"},4:{name:"entity.name.tag.js"},5:{name:"support.class.component.js"},6:{name:"punctuation.definition.tag.end.js"}},name:"meta.tag.without-attributes.js",patterns:[{include:"#jsx-children"}]},"jsx-tag-without-attributes-in-expression":{begin:"(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",end:"(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",patterns:[{include:"#jsx-tag-without-attributes"}]},label:{patterns:[{begin:"([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*\\{)",beginCaptures:{1:{name:"entity.name.label.js"},2:{name:"punctuation.separator.label.js"}},end:"(?<=\\})",patterns:[{include:"#decl-block"}]},{captures:{1:{name:"entity.name.label.js"},2:{name:"punctuation.separator.label.js"}},match:"([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)"}]},literal:{patterns:[{include:"#numeric-literal"},{include:"#boolean-literal"},{include:"#null-literal"},{include:"#undefined-literal"},{include:"#numericConstant-literal"},{include:"#array-literal"},{include:"#this-literal"},{include:"#super-literal"}]},"method-declaration":{patterns:[{begin:"(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?\\s*\\b(constructor)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{1:{name:"storage.modifier.js"},2:{name:"storage.modifier.js"},3:{name:"storage.modifier.js"},4:{name:"storage.modifier.async.js"},5:{name:"storage.type.js"}},end:"(?=\\}|;|,|$)|(?<=\\})",name:"meta.method.declaration.js",patterns:[{include:"#method-declaration-name"},{include:"#function-body"}]},{begin:"(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:(?:\\s*\\b(new)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(?:(\\*)\\s*)?)(?=\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",beginCaptures:{1:{name:"storage.modifier.js"},2:{name:"storage.modifier.js"},3:{name:"storage.modifier.js"},4:{name:"storage.modifier.async.js"},5:{name:"keyword.operator.new.js"},6:{name:"keyword.generator.asterisk.js"}},end:"(?=\\}|;|,|$)|(?<=\\})",name:"meta.method.declaration.js",patterns:[{include:"#method-declaration-name"},{include:"#function-body"}]},{begin:`(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])`,beginCaptures:{1:{name:"storage.modifier.js"},2:{name:"storage.modifier.js"},3:{name:"storage.modifier.js"},4:{name:"storage.modifier.async.js"},5:{name:"storage.type.property.js"},6:{name:"keyword.generator.asterisk.js"}},end:"(?=\\}|;|,|$)|(?<=\\})",name:"meta.method.declaration.js",patterns:[{include:"#method-declaration-name"},{include:"#function-body"}]}]},"method-declaration-name":{begin:`(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])`,end:"(?=\\(|\\<)",patterns:[{include:"#string"},{include:"#array-literal"},{include:"#numeric-literal"},{match:"[_$[:alpha:]][_$[:alnum:]]*",name:"meta.definition.method.js entity.name.function.js"},{match:"\\?",name:"keyword.operator.optional.js"}]},"namespace-declaration":{begin:"(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$[:alpha:]\"'`]))",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.type.namespace.js"}},end:"(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",name:"meta.namespace.declaration.js",patterns:[{include:"#comment"},{include:"#string"},{match:"([_$[:alpha:]][_$[:alnum:]]*)",name:"entity.name.type.module.js"},{include:"#punctuation-accessor"},{include:"#decl-block"}]},"new-expr":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{1:{name:"keyword.operator.new.js"}},end:"(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",name:"new.expr.js",patterns:[{include:"#expression"}]},"null-literal":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"constant.language.null.js"},"numeric-literal":{patterns:[{captures:{1:{name:"storage.type.numeric.bigint.js"}},match:"\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)",name:"constant.numeric.hex.js"},{captures:{1:{name:"storage.type.numeric.bigint.js"}},match:"\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)",name:"constant.numeric.binary.js"},{captures:{1:{name:"storage.type.numeric.bigint.js"}},match:"\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)",name:"constant.numeric.octal.js"},{captures:{0:{name:"constant.numeric.decimal.js"},1:{name:"meta.delimiter.decimal.period.js"},2:{name:"storage.type.numeric.bigint.js"},3:{name:"meta.delimiter.decimal.period.js"},4:{name:"storage.type.numeric.bigint.js"},5:{name:"meta.delimiter.decimal.period.js"},6:{name:"storage.type.numeric.bigint.js"},7:{name:"storage.type.numeric.bigint.js"},8:{name:"meta.delimiter.decimal.period.js"},9:{name:"storage.type.numeric.bigint.js"},10:{name:"meta.delimiter.decimal.period.js"},11:{name:"storage.type.numeric.bigint.js"},12:{name:"meta.delimiter.decimal.period.js"},13:{name:"storage.type.numeric.bigint.js"},14:{name:"storage.type.numeric.bigint.js"}},match:`(?x)
(?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$)`}]},"numericConstant-literal":{patterns:[{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"constant.language.nan.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"constant.language.infinity.js"}]},"object-binding-element":{patterns:[{include:"#comment"},{begin:`(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))`,end:"(?=,|\\})",patterns:[{include:"#object-binding-element-propertyName"},{include:"#binding-element"}]},{include:"#object-binding-pattern"},{include:"#destructuring-variable-rest"},{include:"#variable-initializer"},{include:"#punctuation-comma"}]},"object-binding-element-const":{patterns:[{include:"#comment"},{begin:`(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))`,end:"(?=,|\\})",patterns:[{include:"#object-binding-element-propertyName"},{include:"#binding-element-const"}]},{include:"#object-binding-pattern-const"},{include:"#destructuring-variable-rest-const"},{include:"#variable-initializer"},{include:"#punctuation-comma"}]},"object-binding-element-propertyName":{begin:`(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))`,end:"(:)",endCaptures:{0:{name:"punctuation.destructuring.js"}},patterns:[{include:"#string"},{include:"#array-literal"},{include:"#numeric-literal"},{match:"([_$[:alpha:]][_$[:alnum:]]*)",name:"variable.object.property.js"}]},"object-binding-pattern":{begin:"(?:(\\.\\.\\.)\\s*)?(\\{)",beginCaptures:{1:{name:"keyword.operator.rest.js"},2:{name:"punctuation.definition.binding-pattern.object.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.binding-pattern.object.js"}},patterns:[{include:"#object-binding-element"}]},"object-binding-pattern-const":{begin:"(?:(\\.\\.\\.)\\s*)?(\\{)",beginCaptures:{1:{name:"keyword.operator.rest.js"},2:{name:"punctuation.definition.binding-pattern.object.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.binding-pattern.object.js"}},patterns:[{include:"#object-binding-element-const"}]},"object-identifiers":{patterns:[{match:"([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\??\\.\\s*prototype\\b(?!\\$))",name:"support.class.js"},{captures:{1:{name:"punctuation.accessor.js"},2:{name:"punctuation.accessor.optional.js"},3:{name:"variable.other.constant.object.property.js"},4:{name:"variable.other.object.property.js"}},match:`(?x)(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:
(\\#?[[:upper:]][_$[:digit:][:upper:]]*) |
(\\#?[_$[:alpha:]][_$[:alnum:]]*)
)(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)`},{captures:{1:{name:"variable.other.constant.object.js"},2:{name:"variable.other.object.js"}},match:`(?x)(?:
([[:upper:]][_$[:digit:][:upper:]]*) |
([_$[:alpha:]][_$[:alnum:]]*)
)(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)`}]},"object-literal":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.block.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},name:"meta.objectliteral.js",patterns:[{include:"#object-member"}]},"object-literal-method-declaration":{begin:`(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])`,beginCaptures:{1:{name:"storage.modifier.async.js"},2:{name:"storage.type.property.js"},3:{name:"keyword.generator.asterisk.js"}},end:"(?=\\}|;|,)|(?<=\\})",name:"meta.method.declaration.js",patterns:[{include:"#method-declaration-name"},{include:"#function-body"},{begin:`(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])`,beginCaptures:{1:{name:"storage.modifier.async.js"},2:{name:"storage.type.property.js"},3:{name:"keyword.generator.asterisk.js"}},end:"(?=\\(|\\<)",patterns:[{include:"#method-declaration-name"}]}]},"object-member":{patterns:[{include:"#comment"},{include:"#object-literal-method-declaration"},{begin:"(?=\\[)",end:"(?=:)|((?<=[\\]])(?=\\s*[\\(\\<]))",name:"meta.object.member.js meta.object-literal.key.js",patterns:[{include:"#comment"},{include:"#array-literal"}]},{begin:"(?=[\\'\\\"\\`])",end:"(?=:)|((?<=[\\'\\\"\\`])(?=((\\s*[\\(\\<,}])|(\\s+(as|satisifies)\\s+))))",name:"meta.object.member.js meta.object-literal.key.js",patterns:[{include:"#comment"},{include:"#string"}]},{begin:`(?x)(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$)))`,end:"(?=:)|(?=\\s*([\\(\\<,}])|(\\s+as|satisifies\\s+))",name:"meta.object.member.js meta.object-literal.key.js",patterns:[{include:"#comment"},{include:"#numeric-literal"}]},{begin:"(?<=[\\]\\'\\\"\\`])(?=\\s*[\\(\\<])",end:"(?=\\}|;|,)|(?<=\\})",name:"meta.method.declaration.js",patterns:[{include:"#function-body"}]},{captures:{0:{name:"meta.object-literal.key.js"},1:{name:"constant.numeric.decimal.js"}},match:"(?![_$[:alpha:]])([[:digit:]]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",name:"meta.object.member.js"},{captures:{0:{name:"meta.object-literal.key.js"},1:{name:"entity.name.function.js"}},match:`(?x)(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)))`,name:"meta.object.member.js"},{captures:{0:{name:"meta.object-literal.key.js"}},match:"(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",name:"meta.object.member.js"},{begin:"\\.\\.\\.",beginCaptures:{0:{name:"keyword.operator.spread.js"}},end:"(?=,|\\})",name:"meta.object.member.js",patterns:[{include:"#expression"}]},{captures:{1:{name:"variable.other.readwrite.js"}},match:"([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)",name:"meta.object.member.js"},{captures:{1:{name:"keyword.control.as.js"},2:{name:"storage.modifier.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))",name:"meta.object.member.js"},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",beginCaptures:{1:{name:"keyword.control.as.js"},2:{name:"keyword.control.satisfies.js"}},end:"(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\s+))",name:"meta.object.member.js",patterns:[{include:"#type"}]},{begin:"(?=[_$[:alpha:]][_$[:alnum:]]*\\s*=)",end:"(?=,|\\}|$|\\/\\/|\\/\\*)",name:"meta.object.member.js",patterns:[{include:"#expression"}]},{begin:":",beginCaptures:{0:{name:"meta.object-literal.key.js punctuation.separator.key-value.js"}},end:"(?=,|\\})",name:"meta.object.member.js",patterns:[{begin:"(?<=:)\\s*(async)?(?=\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",beginCaptures:{1:{name:"storage.modifier.async.js"}},end:"(?<=\\))",patterns:[{include:"#type-parameters"},{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"#expression-inside-possibly-arrow-parens"}]}]},{begin:"(?<=:)\\s*(async)?\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",beginCaptures:{1:{name:"storage.modifier.async.js"},2:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"#expression-inside-possibly-arrow-parens"}]},{begin:"(?<=:)\\s*(async)?\\s*(?=\\<\\s*$)",beginCaptures:{1:{name:"storage.modifier.async.js"}},end:"(?<=\\>)",patterns:[{include:"#type-parameters"}]},{begin:"(?<=\\>)\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",beginCaptures:{1:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"#expression-inside-possibly-arrow-parens"}]},{include:"#possibly-arrow-return-type"},{include:"#expression"}]},{include:"#punctuation-comma"},{include:"#decl-block"}]},"parameter-array-binding-pattern":{begin:"(?:(\\.\\.\\.)\\s*)?(\\[)",beginCaptures:{1:{name:"keyword.operator.rest.js"},2:{name:"punctuation.definition.binding-pattern.array.js"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.binding-pattern.array.js"}},patterns:[{include:"#parameter-binding-element"},{include:"#punctuation-comma"}]},"parameter-binding-element":{patterns:[{include:"#comment"},{include:"#string"},{include:"#numeric-literal"},{include:"#regex"},{include:"#parameter-object-binding-pattern"},{include:"#parameter-array-binding-pattern"},{include:"#destructuring-parameter-rest"},{include:"#variable-initializer"}]},"parameter-name":{patterns:[{captures:{1:{name:"storage.modifier.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)"},{captures:{1:{name:"storage.modifier.js"},2:{name:"keyword.operator.rest.js"},3:{name:"entity.name.function.js variable.language.this.js"},4:{name:"entity.name.function.js"},5:{name:"keyword.operator.optional.js"}},match:`(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*
# function assignment |
(=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)) |
# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>
(:\\s*(
(<) |
([(]\\s*(
([)]) |
(\\.\\.\\.) |
([_$[:alnum:]]+\\s*(
([:,?=])|
([)]\\s*=>)
))
))
)) |
(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |
(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |
(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)))`},{captures:{1:{name:"storage.modifier.js"},2:{name:"keyword.operator.rest.js"},3:{name:"variable.parameter.js variable.language.this.js"},4:{name:"variable.parameter.js"},5:{name:"keyword.operator.optional.js"}},match:"(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)"}]},"parameter-object-binding-element":{patterns:[{include:"#comment"},{begin:`(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|
(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|
(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))
)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))`,end:"(?=,|\\})",patterns:[{include:"#object-binding-element-propertyName"},{include:"#parameter-binding-element"},{include:"#paren-expression"}]},{include:"#parameter-object-binding-pattern"},{include:"#destructuring-parameter-rest"},{include:"#variable-initializer"},{include:"#punctuation-comma"}]},"parameter-object-binding-pattern":{begin:"(?:(\\.\\.\\.)\\s*)?(\\{)",beginCaptures:{1:{name:"keyword.operator.rest.js"},2:{name:"punctuation.definition.binding-pattern.object.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.binding-pattern.object.js"}},patterns:[{include:"#parameter-object-binding-element"}]},"parameter-type-annotation":{patterns:[{begin:"(:)",beginCaptures:{1:{name:"keyword.operator.type.annotation.js"}},end:"(?=[,)])|(?==[^>])",name:"meta.type.annotation.js",patterns:[{include:"#type"}]}]},"paren-expression":{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"#expression"}]},"paren-expression-possibly-arrow":{patterns:[{begin:"(?<=[(=,])\\s*(async)?(?=\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",beginCaptures:{1:{name:"storage.modifier.async.js"}},end:"(?<=\\))",patterns:[{include:"#paren-expression-possibly-arrow-with-typeparameters"}]},{begin:"(?<=[(=,]|=>|^return|[^\\._$[:alnum:]]return)\\s*(async)?(?=\\s*((((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\()|(<)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)))\\s*$)",beginCaptures:{1:{name:"storage.modifier.async.js"}},end:"(?<=\\))",patterns:[{include:"#paren-expression-possibly-arrow-with-typeparameters"}]},{include:"#possibly-arrow-return-type"}]},"paren-expression-possibly-arrow-with-typeparameters":{patterns:[{include:"#type-parameters"},{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"#expression-inside-possibly-arrow-parens"}]}]},"possibly-arrow-return-type":{begin:"(?<=\\)|^)\\s*(:)(?=\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*=>)",beginCaptures:{1:{name:"meta.arrow.js meta.return.type.arrow.js keyword.operator.type.annotation.js"}},contentName:"meta.arrow.js meta.return.type.arrow.js",end:"(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",patterns:[{include:"#arrow-return-type-body"}]},"property-accessor":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"storage.type.property.js"},"punctuation-accessor":{captures:{1:{name:"punctuation.accessor.js"},2:{name:"punctuation.accessor.optional.js"}},match:"(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"},"punctuation-comma":{match:",",name:"punctuation.separator.comma.js"},"punctuation-semicolon":{match:";",name:"punctuation.terminator.statement.js"},"qstring-double":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:'(")|((?:[^\\\\\\n])$)',endCaptures:{1:{name:"punctuation.definition.string.end.js"},2:{name:"invalid.illegal.newline.js"}},name:"string.quoted.double.js",patterns:[{include:"#string-character-escape"}]},"qstring-single":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"(\\')|((?:[^\\\\\\n])$)",endCaptures:{1:{name:"punctuation.definition.string.end.js"},2:{name:"invalid.illegal.newline.js"}},name:"string.quoted.single.js",patterns:[{include:"#string-character-escape"}]},regex:{patterns:[{begin:"(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",beginCaptures:{1:{name:"punctuation.definition.string.begin.js"}},end:"(/)([dgimsuy]*)",endCaptures:{1:{name:"punctuation.definition.string.end.js"},2:{name:"keyword.other.js"}},name:"string.regexp.js",patterns:[{include:"#regexp"}]},{begin:"((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"(/)([dgimsuy]*)",endCaptures:{1:{name:"punctuation.definition.string.end.js"},2:{name:"keyword.other.js"}},name:"string.regexp.js",patterns:[{include:"#regexp"}]}]},"regex-character-class":{patterns:[{match:"\\\\[wWsSdDtrnvf]|\\.",name:"constant.other.character-class.regexp"},{match:"\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})",name:"constant.character.numeric.regexp"},{match:"\\\\c[A-Z]",name:"constant.character.control.regexp"},{match:"\\\\.",name:"constant.character.escape.backslash.regexp"}]},regexp:{patterns:[{match:"\\\\[bB]|\\^|\\$",name:"keyword.control.anchor.regexp"},{captures:{0:{name:"keyword.other.back-reference.regexp"},1:{name:"variable.other.regexp"}},match:"\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>"},{match:"[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??",name:"keyword.operator.quantifier.regexp"},{match:"\\|",name:"keyword.operator.or.regexp"},{begin:"(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))",beginCaptures:{1:{name:"punctuation.definition.group.regexp"},2:{name:"punctuation.definition.group.assertion.regexp"},3:{name:"meta.assertion.look-ahead.regexp"},4:{name:"meta.assertion.negative-look-ahead.regexp"},5:{name:"meta.assertion.look-behind.regexp"},6:{name:"meta.assertion.negative-look-behind.regexp"}},end:"(\\))",endCaptures:{1:{name:"punctuation.definition.group.regexp"}},name:"meta.group.assertion.regexp",patterns:[{include:"#regexp"}]},{begin:"\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?",beginCaptures:{0:{name:"punctuation.definition.group.regexp"},1:{name:"punctuation.definition.group.no-capture.regexp"},2:{name:"variable.other.regexp"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.group.regexp"}},name:"meta.group.regexp",patterns:[{include:"#regexp"}]},{begin:"(\\[)(\\^)?",beginCaptures:{1:{name:"punctuation.definition.character-class.regexp"},2:{name:"keyword.operator.negation.regexp"}},end:"(\\])",endCaptures:{1:{name:"punctuation.definition.character-class.regexp"}},name:"constant.other.character-class.set.regexp",patterns:[{captures:{1:{name:"constant.character.numeric.regexp"},2:{name:"constant.character.control.regexp"},3:{name:"constant.character.escape.backslash.regexp"},4:{name:"constant.character.numeric.regexp"},5:{name:"constant.character.control.regexp"},6:{name:"constant.character.escape.backslash.regexp"}},match:"(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",name:"constant.other.character-class.range.regexp"},{include:"#regex-character-class"}]},{include:"#regex-character-class"}]},"return-type":{patterns:[{begin:"(?<=\\))\\s*(:)(?=\\s*\\S)",beginCaptures:{1:{name:"keyword.operator.type.annotation.js"}},end:"(?<![:|&])(?=$|^|[{};,]|//)",name:"meta.return.type.js",patterns:[{include:"#return-type-core"}]},{begin:"(?<=\\))\\s*(:)",beginCaptures:{1:{name:"keyword.operator.type.annotation.js"}},end:"(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",name:"meta.return.type.js",patterns:[{include:"#return-type-core"}]}]},"return-type-core":{patterns:[{include:"#comment"},{begin:"(?<=[:|&])(?=\\s*\\{)",end:"(?<=\\})",patterns:[{include:"#type-object"}]},{include:"#type-predicate-operator"},{include:"#type"}]},shebang:{captures:{1:{name:"punctuation.definition.comment.js"}},match:"\\A(#!).*(?=$)",name:"comment.line.shebang.js"},"single-line-comment-consuming-line-ending":{begin:"(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.js"},2:{name:"comment.line.double-slash.js"},3:{name:"punctuation.definition.comment.js"},4:{name:"storage.type.internaldeclaration.js"},5:{name:"punctuation.decorator.internaldeclaration.js"}},contentName:"comment.line.double-slash.js",end:"(?=^)"},statements:{patterns:[{include:"#declaration"},{include:"#control-statement"},{include:"#after-operator-block-as-object-literal"},{include:"#decl-block"},{include:"#label"},{include:"#expression"},{include:"#punctuation-semicolon"},{include:"#string"},{include:"#comment"}]},string:{patterns:[{include:"#qstring-single"},{include:"#qstring-double"},{include:"#template"}]},"string-character-escape":{match:"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)",name:"constant.character.escape.js"},"super-literal":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)",name:"variable.language.super.js"},"support-function-call-identifiers":{patterns:[{include:"#literal"},{include:"#support-objects"},{include:"#object-identifiers"},{include:"#punctuation-accessor"},{match:"(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*[\\(]\\s*[\\\"\\'\\`]))",name:"keyword.operator.expression.import.js"}]},"support-objects":{patterns:[{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)",name:"variable.language.arguments.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)",name:"support.class.promise.js"},{captures:{1:{name:"keyword.control.import.js"},2:{name:"punctuation.accessor.js"},3:{name:"punctuation.accessor.optional.js"},4:{name:"support.variable.property.importmeta.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(meta)\\b(?!\\$)"},{captures:{1:{name:"keyword.operator.new.js"},2:{name:"punctuation.accessor.js"},3:{name:"punctuation.accessor.optional.js"},4:{name:"support.variable.property.target.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(target)\\b(?!\\$)"},{captures:{1:{name:"punctuation.accessor.js"},2:{name:"punctuation.accessor.optional.js"},3:{name:"support.variable.property.js"},4:{name:"support.constant.js"}},match:`(?x) (?:(\\.)|(\\?\\.(?!\\s*[[:digit:]]))) \\s* (?:
(?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())
|
(?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))`},{captures:{1:{name:"support.type.object.module.js"},2:{name:"support.type.object.module.js"},3:{name:"punctuation.accessor.js"},4:{name:"punctuation.accessor.optional.js"},5:{name:"support.type.object.module.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)"}]},"switch-statement":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\s*\\()",end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},name:"switch-statement.expr.js",patterns:[{include:"#comment"},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()",beginCaptures:{1:{name:"keyword.control.switch.js"},2:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},name:"switch-expression.expr.js",patterns:[{include:"#expression"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.block.js"}},end:"(?=\\})",name:"switch-block.expr.js",patterns:[{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{1:{name:"keyword.control.switch.js"}},end:"(?=:)",name:"case-clause.expr.js",patterns:[{include:"#expression"}]},{begin:"(:)\\s*(\\{)",beginCaptures:{1:{name:"case-clause.expr.js punctuation.definition.section.case-statement.js"},2:{name:"meta.block.js punctuation.definition.block.js"}},contentName:"meta.block.js",end:"\\}",endCaptures:{0:{name:"meta.block.js punctuation.definition.block.js"}},patterns:[{include:"#statements"}]},{captures:{0:{name:"case-clause.expr.js punctuation.definition.section.case-statement.js"}},match:"(:)"},{include:"#statements"}]}]},template:{patterns:[{include:"#template-call"},{begin:"([_$[:alpha:]][_$[:alnum:]]*)?(`)",beginCaptures:{1:{name:"entity.name.function.tagged-template.js"},2:{name:"string.template.js punctuation.definition.string.template.begin.js"}},contentName:"string.template.js",end:"`",endCaptures:{0:{name:"string.template.js punctuation.definition.string.template.end.js"}},patterns:[{include:"#template-substitution-element"},{include:"#string-character-escape"}]}]},"template-call":{patterns:[{begin:"(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*)(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",end:"(?=`)",patterns:[{begin:"(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*))",end:"(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",patterns:[{include:"#support-function-call-identifiers"},{match:"([_$[:alpha:]][_$[:alnum:]]*)",name:"entity.name.function.tagged-template.js"}]},{include:"#type-arguments"}]},{begin:"([_$[:alpha:]][_$[:alnum:]]*)?\\s*(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)`)",beginCaptures:{1:{name:"entity.name.function.tagged-template.js"}},end:"(?=`)",patterns:[{include:"#type-arguments"}]}]},"template-substitution-element":{begin:"\\$\\{",beginCaptures:{0:{name:"punctuation.definition.template-expression.begin.js"}},contentName:"meta.embedded.line.js",end:"\\}",endCaptures:{0:{name:"punctuation.definition.template-expression.end.js"}},name:"meta.template.expression.js",patterns:[{include:"#expression"}]},"template-type":{patterns:[{include:"#template-call"},{begin:"([_$[:alpha:]][_$[:alnum:]]*)?(`)",beginCaptures:{1:{name:"entity.name.function.tagged-template.js"},2:{name:"string.template.js punctuation.definition.string.template.begin.js"}},contentName:"string.template.js",end:"`",endCaptures:{0:{name:"string.template.js punctuation.definition.string.template.end.js"}},patterns:[{include:"#template-type-substitution-element"},{include:"#string-character-escape"}]}]},"template-type-substitution-element":{begin:"\\$\\{",beginCaptures:{0:{name:"punctuation.definition.template-expression.begin.js"}},contentName:"meta.embedded.line.js",end:"\\}",endCaptures:{0:{name:"punctuation.definition.template-expression.end.js"}},name:"meta.template.expression.js",patterns:[{include:"#type"}]},"ternary-expression":{begin:"(?!\\?\\.\\s*[^[:digit:]])(\\?)(?!\\?)",beginCaptures:{1:{name:"keyword.operator.ternary.js"}},end:"\\s*(:)",endCaptures:{1:{name:"keyword.operator.ternary.js"}},patterns:[{include:"#expression"}]},"this-literal":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)",name:"variable.language.this.js"},type:{patterns:[{include:"#comment"},{include:"#type-string"},{include:"#numeric-literal"},{include:"#type-primitive"},{include:"#type-builtin-literals"},{include:"#type-parameters"},{include:"#type-tuple"},{include:"#type-object"},{include:"#type-operators"},{include:"#type-conditional"},{include:"#type-fn-type-parameters"},{include:"#type-paren-or-function-parameters"},{include:"#type-function-return-type"},{captures:{1:{name:"storage.modifier.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*"},{include:"#type-name"}]},"type-alias-declaration":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(type)\\b\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.type.type.js"},4:{name:"entity.name.type.alias.js"}},end:"(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",name:"meta.type.declaration.js",patterns:[{include:"#comment"},{include:"#type-parameters"},{begin:"(=)\\s*(intrinsic)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{1:{name:"keyword.operator.assignment.js"},2:{name:"keyword.control.intrinsic.js"}},end:"(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",patterns:[{include:"#type"}]},{begin:"(=)\\s*",beginCaptures:{1:{name:"keyword.operator.assignment.js"}},end:"(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",patterns:[{include:"#type"}]}]},"type-annotation":{patterns:[{begin:"(:)(?=\\s*\\S)",beginCaptures:{1:{name:"keyword.operator.type.annotation.js"}},end:"(?<![:|&])(?!\\s*[|&]\\s+)((?=^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",name:"meta.type.annotation.js",patterns:[{include:"#type"}]},{begin:"(:)",beginCaptures:{1:{name:"keyword.operator.type.annotation.js"}},end:"(?<![:|&])((?=[,);\\}\\]]|\\/\\/)|(?==[^>])|(?=^\\s*$)|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",name:"meta.type.annotation.js",patterns:[{include:"#type"}]}]},"type-arguments":{begin:"\\<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.js"}},end:"\\>",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.js"}},name:"meta.type.parameters.js",patterns:[{include:"#type-arguments-body"}]},"type-arguments-body":{patterns:[{captures:{0:{name:"keyword.operator.type.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"},{include:"#type"},{include:"#punctuation-comma"}]},"type-builtin-literals":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"support.type.builtin.js"},"type-conditional":{patterns:[{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+",beginCaptures:{1:{name:"storage.modifier.js"}},end:"(?<=:)",patterns:[{begin:"\\?",beginCaptures:{0:{name:"keyword.operator.ternary.js"}},end:":",endCaptures:{0:{name:"keyword.operator.ternary.js"}},patterns:[{include:"#type"}]},{include:"#type"}]}]},"type-fn-type-parameters":{patterns:[{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b(?=\\s*\\<)",beginCaptures:{1:{name:"meta.type.constructor.js storage.modifier.js"},2:{name:"meta.type.constructor.js keyword.control.new.js"}},end:"(?<=>)",patterns:[{include:"#comment"},{include:"#type-parameters"}]},{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b\\s*(?=\\()",beginCaptures:{1:{name:"storage.modifier.js"},2:{name:"keyword.control.new.js"}},end:"(?<=\\))",name:"meta.type.constructor.js",patterns:[{include:"#function-parameters"}]},{begin:`(?x)(
(?=
[(]\\s*(
([)]) |
(\\.\\.\\.) |
([_$[:alnum:]]+\\s*(
([:,?=])|
([)]\\s*=>)
))
)
)
)`,end:"(?<=\\))",name:"meta.type.function.js",patterns:[{include:"#function-parameters"}]}]},"type-function-return-type":{patterns:[{begin:"(=>)(?=\\s*\\S)",beginCaptures:{1:{name:"storage.type.function.arrow.js"}},end:"(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)",name:"meta.type.function.return.js",patterns:[{include:"#type-function-return-type-core"}]},{begin:"=>",beginCaptures:{0:{name:"storage.type.function.arrow.js"}},end:"(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",name:"meta.type.function.return.js",patterns:[{include:"#type-function-return-type-core"}]}]},"type-function-return-type-core":{patterns:[{include:"#comment"},{begin:"(?<==>)(?=\\s*\\{)",end:"(?<=\\})",patterns:[{include:"#type-object"}]},{include:"#type-predicate-operator"},{include:"#type"}]},"type-infer":{patterns:[{captures:{1:{name:"keyword.operator.expression.infer.js"},2:{name:"entity.name.type.js"},3:{name:"keyword.operator.expression.extends.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s+(extends)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))?",name:"meta.type.infer.js"}]},"type-name":{patterns:[{begin:"([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(<)",captures:{1:{name:"entity.name.type.module.js"},2:{name:"punctuation.accessor.js"},3:{name:"punctuation.accessor.optional.js"},4:{name:"meta.type.parameters.js punctuation.definition.typeparameters.begin.js"}},contentName:"meta.type.parameters.js",end:"(>)",endCaptures:{1:{name:"meta.type.parameters.js punctuation.definition.typeparameters.end.js"}},patterns:[{include:"#type-arguments-body"}]},{begin:"([_$[:alpha:]][_$[:alnum:]]*)\\s*(<)",beginCaptures:{1:{name:"entity.name.type.js"},2:{name:"meta.type.parameters.js punctuation.definition.typeparameters.begin.js"}},contentName:"meta.type.parameters.js",end:"(>)",endCaptures:{1:{name:"meta.type.parameters.js punctuation.definition.typeparameters.end.js"}},patterns:[{include:"#type-arguments-body"}]},{captures:{1:{name:"entity.name.type.module.js"},2:{name:"punctuation.accessor.js"},3:{name:"punctuation.accessor.optional.js"}},match:"([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"},{match:"[_$[:alpha:]][_$[:alnum:]]*",name:"entity.name.type.js"}]},"type-object":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.block.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.js"}},name:"meta.object.type.js",patterns:[{include:"#comment"},{include:"#method-declaration"},{include:"#indexer-declaration"},{include:"#indexer-mapped-type-declaration"},{include:"#field-declaration"},{include:"#type-annotation"},{begin:"\\.\\.\\.",beginCaptures:{0:{name:"keyword.operator.spread.js"}},end:"(?=\\}|;|,|$)|(?<=\\})",patterns:[{include:"#type"}]},{include:"#punctuation-comma"},{include:"#punctuation-semicolon"},{include:"#type"}]},"type-operators":{patterns:[{include:"#typeof-operator"},{include:"#type-infer"},{begin:"([&|])(?=\\s*\\{)",beginCaptures:{0:{name:"keyword.operator.type.js"}},end:"(?<=\\})",patterns:[{include:"#type-object"}]},{begin:"[&|]",beginCaptures:{0:{name:"keyword.operator.type.js"}},end:"(?=\\S)"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.operator.expression.keyof.js"},{match:"(\\?|\\:)",name:"keyword.operator.ternary.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()",name:"keyword.operator.expression.import.js"}]},"type-parameters":{begin:"(<)",beginCaptures:{1:{name:"punctuation.definition.typeparameters.begin.js"}},end:"(>)",endCaptures:{1:{name:"punctuation.definition.typeparameters.end.js"}},name:"meta.type.parameters.js",patterns:[{include:"#comment"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"storage.modifier.js"},{include:"#type"},{include:"#punctuation-comma"},{match:"(=)(?!>)",name:"keyword.operator.assignment.js"}]},"type-paren-or-function-parameters":{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},name:"meta.type.paren.cover.js",patterns:[{captures:{1:{name:"storage.modifier.js"},2:{name:"keyword.operator.rest.js"},3:{name:"entity.name.function.js variable.language.this.js"},4:{name:"entity.name.function.js"},5:{name:"keyword.operator.optional.js"}},match:`(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=\\s*(:\\s*(
(<) |
([(]\\s*(
([)]) |
(\\.\\.\\.) |
([_$[:alnum:]]+\\s*(
([:,?=])|
([)]\\s*=>)
))
))
)) |
(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |
(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))`},{captures:{1:{name:"storage.modifier.js"},2:{name:"keyword.operator.rest.js"},3:{name:"variable.parameter.js variable.language.this.js"},4:{name:"variable.parameter.js"},5:{name:"keyword.operator.optional.js"}},match:"(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=:)"},{include:"#type-annotation"},{match:",",name:"punctuation.separator.parameter.js"},{include:"#type"}]},"type-predicate-operator":{patterns:[{captures:{1:{name:"keyword.operator.type.asserts.js"},2:{name:"variable.parameter.js variable.language.this.js"},3:{name:"variable.parameter.js"},4:{name:"keyword.operator.expression.is.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s(is)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"},{captures:{1:{name:"keyword.operator.type.asserts.js"},2:{name:"variable.parameter.js variable.language.this.js"},3:{name:"variable.parameter.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.operator.type.asserts.js"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"keyword.operator.expression.is.js"}]},"type-primitive":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"support.type.primitive.js"},"type-string":{patterns:[{include:"#qstring-single"},{include:"#qstring-double"},{include:"#template-type"}]},"type-tuple":{begin:"\\[",beginCaptures:{0:{name:"meta.brace.square.js"}},end:"\\]",endCaptures:{0:{name:"meta.brace.square.js"}},name:"meta.type.tuple.js",patterns:[{match:"\\.\\.\\.",name:"keyword.operator.rest.js"},{captures:{1:{name:"entity.name.label.js"},2:{name:"keyword.operator.optional.js"},3:{name:"punctuation.separator.label.js"}},match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\?)?\\s*(:)"},{include:"#type"},{include:"#punctuation-comma"}]},"typeof-operator":{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",beginCaptures:{0:{name:"keyword.operator.expression.typeof.js"}},end:"(?=[,);}\\]=>:&|{\\?]|(extends\\s+)|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",patterns:[{include:"#type-arguments"},{include:"#expression"}]},"undefined-literal":{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"constant.language.undefined.js"},"var-expr":{patterns:[{begin:"(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",end:"(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^let|[^\\._$[:alnum:]]let|^var|[^\\._$[:alnum:]]var)(?=\\s*$)))",name:"meta.var.expr.js",patterns:[{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.type.js"}},end:"(?=\\S)"},{include:"#destructuring-variable"},{include:"#var-single-variable"},{include:"#variable-initializer"},{include:"#comment"},{begin:"(,)\\s*(?=$|\\/\\/)",beginCaptures:{1:{name:"punctuation.separator.comma.js"}},end:"(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",patterns:[{include:"#single-line-comment-consuming-line-ending"},{include:"#comment"},{include:"#destructuring-variable"},{include:"#var-single-variable"},{include:"#punctuation-comma"}]},{include:"#punctuation-comma"}]},{begin:"(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.type.js"}},end:"(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^const|[^\\._$[:alnum:]]const)(?=\\s*$)))",name:"meta.var.expr.js",patterns:[{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.type.js"}},end:"(?=\\S)"},{include:"#destructuring-const"},{include:"#var-single-const"},{include:"#variable-initializer"},{include:"#comment"},{begin:"(,)\\s*(?=$|\\/\\/)",beginCaptures:{1:{name:"punctuation.separator.comma.js"}},end:"(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",patterns:[{include:"#single-line-comment-consuming-line-ending"},{include:"#comment"},{include:"#destructuring-const"},{include:"#var-single-const"},{include:"#punctuation-comma"}]},{include:"#punctuation-comma"}]},{begin:"(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.type.js"}},end:"(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^using|[^\\._$[:alnum:]]using|^await\\s+using|[^\\._$[:alnum:]]await\\s+using)(?=\\s*$)))",name:"meta.var.expr.js",patterns:[{begin:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",beginCaptures:{1:{name:"keyword.control.export.js"},2:{name:"storage.modifier.js"},3:{name:"storage.type.js"}},end:"(?=\\S)"},{include:"#var-single-const"},{include:"#variable-initializer"},{include:"#comment"},{begin:"(,)\\s*((?!\\S)|(?=\\/\\/))",beginCaptures:{1:{name:"punctuation.separator.comma.js"}},end:"(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",patterns:[{include:"#single-line-comment-consuming-line-ending"},{include:"#comment"},{include:"#var-single-const"},{include:"#punctuation-comma"}]},{include:"#punctuation-comma"}]}]},"var-single-const":{patterns:[{begin:`(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*
# function assignment |
(=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)) |
# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>
(:\\s*(
(<) |
([(]\\s*(
([)]) |
(\\.\\.\\.) |
([_$[:alnum:]]+\\s*(
([:,?=])|
([)]\\s*=>)
))
))
)) |
(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |
(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |
(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)))`,beginCaptures:{1:{name:"meta.definition.variable.js variable.other.constant.js entity.name.function.js"}},end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",name:"meta.var-single-variable.expr.js",patterns:[{include:"#var-single-variable-type-annotation"}]},{begin:"([_$[:alpha:]][_$[:alnum:]]*)",beginCaptures:{1:{name:"meta.definition.variable.js variable.other.constant.js"}},end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",name:"meta.var-single-variable.expr.js",patterns:[{include:"#var-single-variable-type-annotation"}]}]},"var-single-variable":{patterns:[{begin:`(?x)([_$[:alpha:]][_$[:alnum:]]*)(\\!)?(?=\\s*
# function assignment |
(=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)) |
# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>
(:\\s*(
(<) |
([(]\\s*(
([)]) |
(\\.\\.\\.) |
([_$[:alnum:]]+\\s*(
([:,?=])|
([)]\\s*=>)
))
))
)) |
(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |
(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |
(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(
((async\\s+)?(
(function\\s*[(<*]) |
(function\\s+) |
([_$[:alpha:]][_$[:alnum:]]*\\s*=>)
)) |
((async\\s*)?(
((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |

(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*
(
([)]\\s*:) |
((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)
)
) |
(
[<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]
) |
# arrow function possible to detect only with => on same line
(
(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?
\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\"\\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\\`([^\\\`\\\\]|\\\\.)*\\\`))*)?\\)
(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?
\\s*=>
)
))
)))`,beginCaptures:{1:{name:"meta.definition.variable.js entity.name.function.js"},2:{name:"keyword.operator.definiteassignment.js"}},end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",name:"meta.var-single-variable.expr.js",patterns:[{include:"#var-single-variable-type-annotation"}]},{begin:"([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])(\\!)?",beginCaptures:{1:{name:"meta.definition.variable.js variable.other.constant.js"},2:{name:"keyword.operator.definiteassignment.js"}},end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",name:"meta.var-single-variable.expr.js",patterns:[{include:"#var-single-variable-type-annotation"}]},{begin:"([_$[:alpha:]][_$[:alnum:]]*)(\\!)?",beginCaptures:{1:{name:"meta.definition.variable.js variable.other.readwrite.js"},2:{name:"keyword.operator.definiteassignment.js"}},end:"(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",name:"meta.var-single-variable.expr.js",patterns:[{include:"#var-single-variable-type-annotation"}]}]},"var-single-variable-type-annotation":{patterns:[{include:"#type-annotation"},{include:"#string"},{include:"#comment"}]},"variable-initializer":{patterns:[{begin:"(?<!=|!)(=)(?!=)(?=\\s*\\S)(?!\\s*.*=>\\s*$)",beginCaptures:{1:{name:"keyword.operator.assignment.js"}},end:"(?=$|^|[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",patterns:[{include:"#expression"}]},{begin:"(?<!=|!)(=)(?!=)",beginCaptures:{1:{name:"keyword.operator.assignment.js"}},end:"(?=[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))|(?=^\\s*$)|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\S)(?<!=)(?=\\s*$)",patterns:[{include:"#expression"}]}]}},scopeName:"source.js",aliases:["js"]});var e=[t];const a=Object.freeze({displayName:"CSS",name:"css",patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#combinators"},{include:"#selector"},{include:"#at-rules"},{include:"#rule-list"}],repository:{"at-rules":{patterns:[{begin:"\\A(?:\\xEF\\xBB\\xBF)?(?i:(?=\\s*@charset\\b))",end:";|(?=$)",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.charset.css",patterns:[{captures:{1:{name:"invalid.illegal.not-lowercase.charset.css"},2:{name:"invalid.illegal.leading-whitespace.charset.css"},3:{name:"invalid.illegal.no-whitespace.charset.css"},4:{name:"invalid.illegal.whitespace.charset.css"},5:{name:"invalid.illegal.not-double-quoted.charset.css"},6:{name:"invalid.illegal.unclosed-string.charset.css"},7:{name:"invalid.illegal.unexpected-characters.charset.css"}},match:`(?x)
\\G
((?!@charset)@\\w+)
|
\\G(\\s+)
|
(@charset\\S[^;]*)
|
(?<=@charset)
(\\x20{2,}|\\t+)
|
(?<=@charset\\x20)
([^";]+)
|
("[^"]+$)
|
(?<=")
([^;]+)`},{captures:{1:{name:"keyword.control.at-rule.charset.css"},2:{name:"punctuation.definition.keyword.css"}},match:"((@)charset)(?=\\s)"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"|$',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{begin:'(?:\\G|^)(?=(?:[^"])+$)',end:"$",name:"invalid.illegal.unclosed.string.css"}]}]},{begin:`(?i)((@)import)(?:\\s+|$|(?=['"]|/\\*))`,beginCaptures:{1:{name:"keyword.control.at-rule.import.css"},2:{name:"punctuation.definition.keyword.css"}},end:";",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.import.css",patterns:[{begin:"\\G\\s*(?=/\\*)",end:"(?<=\\*/)\\s*",patterns:[{include:"#comment-block"}]},{include:"#string"},{include:"#url"},{include:"#media-query-list"}]},{begin:"(?i)((@)font-face)(?=\\s*|{|/\\*|$)",beginCaptures:{1:{name:"keyword.control.at-rule.font-face.css"},2:{name:"punctuation.definition.keyword.css"}},end:"(?!\\G)",name:"meta.at-rule.font-face.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#rule-list"}]},{begin:"(?i)(@)page(?=[\\s:{]|/\\*|$)",captures:{0:{name:"keyword.control.at-rule.page.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*($|[:{;]))",name:"meta.at-rule.page.css",patterns:[{include:"#rule-list"}]},{begin:"(?i)(?=@media(\\s|\\(|/\\*|$))",end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)media",beginCaptures:{0:{name:"keyword.control.at-rule.media.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[{;])",name:"meta.at-rule.media.header.css",patterns:[{include:"#media-query-list"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.media.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.media.end.bracket.curly.css"}},name:"meta.at-rule.media.body.css",patterns:[{include:"$self"}]}]},{begin:`(?i)(?=@counter-style([\\s'"{;]|/\\*|$))`,end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)counter-style",beginCaptures:{0:{name:"keyword.control.at-rule.counter-style.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*{)",name:"meta.at-rule.counter-style.header.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{captures:{0:{patterns:[{include:"#escapes"}]}},match:`(?x)
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.parameter.style-name.css"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.property-list.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.property-list.end.bracket.curly.css"}},name:"meta.at-rule.counter-style.body.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#rule-list-innards"}]}]},{begin:`(?i)(?=@document([\\s'"{;]|/\\*|$))`,end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)document",beginCaptures:{0:{name:"keyword.control.at-rule.document.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[{;])",name:"meta.at-rule.document.header.css",patterns:[{begin:"(?i)(?<![\\w-])(url-prefix|domain|regexp)(\\()",beginCaptures:{1:{name:"support.function.document-rule.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.document-rule.css",patterns:[{include:"#string"},{include:"#comment-block"},{include:"#escapes"},{match:`[^'")\\s]+`,name:"variable.parameter.document-rule.css"}]},{include:"#url"},{include:"#commas"},{include:"#comment-block"},{include:"#escapes"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.document.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.document.end.bracket.curly.css"}},name:"meta.at-rule.document.body.css",patterns:[{include:"$self"}]}]},{begin:`(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\s'"{;]|/\\*|$))`,end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes",beginCaptures:{0:{name:"keyword.control.at-rule.keyframes.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*{)",name:"meta.at-rule.keyframes.header.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{captures:{0:{patterns:[{include:"#escapes"}]}},match:`(?x)
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.parameter.keyframe-list.css"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.keyframes.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.keyframes.end.bracket.curly.css"}},name:"meta.at-rule.keyframes.body.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{captures:{1:{name:"entity.other.keyframe-offset.css"},2:{name:"entity.other.keyframe-offset.percentage.css"}},match:`(?xi)
(?<![\\w-]) (from|to) (?![\\w-])
|
([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)`},{include:"#rule-list"}]}]},{begin:"(?i)(?=@supports(\\s|\\(|/\\*|$))",end:"(?<=})(?!\\G)|(?=;)",patterns:[{begin:"(?i)\\G(@)supports",beginCaptures:{0:{name:"keyword.control.at-rule.supports.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[{;])",name:"meta.at-rule.supports.header.css",patterns:[{include:"#feature-query-operators"},{include:"#feature-query"},{include:"#comment-block"},{include:"#escapes"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.supports.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.supports.end.bracket.curly.css"}},name:"meta.at-rule.supports.body.css",patterns:[{include:"$self"}]}]},{begin:`(?i)((@)(-(ms|o)-)?viewport)(?=[\\s'"{;]|/\\*|$)`,beginCaptures:{1:{name:"keyword.control.at-rule.viewport.css"},2:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[@{;])",name:"meta.at-rule.viewport.css",patterns:[{include:"#comment-block"},{include:"#escapes"}]},{begin:`(?i)((@)font-feature-values)(?=[\\s'"{;]|/\\*|$)\\s*`,beginCaptures:{1:{name:"keyword.control.at-rule.font-feature-values.css"},2:{name:"punctuation.definition.keyword.css"}},contentName:"variable.parameter.font-name.css",end:"(?=\\s*[@{;])",name:"meta.at-rule.font-features.css",patterns:[{include:"#comment-block"},{include:"#escapes"}]},{include:"#font-features"},{begin:`(?i)((@)namespace)(?=[\\s'";]|/\\*|$)`,beginCaptures:{1:{name:"keyword.control.at-rule.namespace.css"},2:{name:"punctuation.definition.keyword.css"}},end:";|(?=[@{])",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.namespace.css",patterns:[{include:"#url"},{captures:{1:{patterns:[{include:"#comment-block"}]},2:{name:"entity.name.function.namespace-prefix.css",patterns:[{include:"#escapes"}]}},match:`(?xi)
(?:\\G|^|(?<=\\s))
(?=
(?<=\\s|^)
(?:[-a-zA-Z_]|[^\\x00-\\x7F])
|
\\s*
/\\*(?:[^*]|\\*[^/])*\\*/
)
(.*?)
(
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*
)`},{include:"#comment-block"},{include:"#escapes"},{include:"#string"}]},{begin:"(?i)(?=@[\\w-]+[^;]+;s*$)",end:"(?<=;)(?!\\G)",patterns:[{begin:"(?i)\\G(@)[\\w-]+",beginCaptures:{0:{name:"keyword.control.at-rule.css"},1:{name:"punctuation.definition.keyword.css"}},end:";",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.header.css"}]},{begin:"(?i)(?=@[\\w-]+(\\s|\\(|{|/\\*|$))",end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)[\\w-]+",beginCaptures:{0:{name:"keyword.control.at-rule.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[{;])",name:"meta.at-rule.header.css"},{begin:"{",beginCaptures:{0:{name:"punctuation.section.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.end.bracket.curly.css"}},name:"meta.at-rule.body.css",patterns:[{include:"$self"}]}]}]},"color-keywords":{patterns:[{match:"(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])",name:"support.constant.color.w3c-standard-color-name.css"},{match:`(?xi) (?<![\\w-])
(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood
|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan
|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange
|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise
|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen
|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki
|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow
|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray
|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue
|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise
|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered
|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum
|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell
|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato
|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)
(?![\\w-])`,name:"support.constant.color.w3c-extended-color-name.css"},{match:"(?i)(?<![\\w-])currentColor(?![\\w-])",name:"support.constant.color.current.css"},{match:`(?xi) (?<![\\w-])
(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow
|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption
|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow
|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)
(?![\\w-])`,name:"invalid.deprecated.color.system.css"}]},combinators:{patterns:[{match:"/deep/|>>>",name:"invalid.deprecated.combinator.css"},{match:">>|>|\\+|~",name:"keyword.operator.combinator.css"}]},commas:{match:",",name:"punctuation.separator.list.comma.css"},"comment-block":{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.css"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.css"}},name:"comment.block.css"},escapes:{patterns:[{match:"\\\\[0-9a-fA-F]{1,6}",name:"constant.character.escape.codepoint.css"},{begin:"\\\\$\\s*",end:"^(?<!\\G)",name:"constant.character.escape.newline.css"},{match:"\\\\.",name:"constant.character.escape.css"}]},"feature-query":{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.condition.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.condition.end.bracket.round.css"}},name:"meta.feature-query.css",patterns:[{include:"#feature-query-operators"},{include:"#feature-query"}]},"feature-query-operators":{patterns:[{match:"(?i)(?<=[\\s()]|^|\\*/)(and|not|or)(?=[\\s()]|/\\*|$)",name:"keyword.operator.logical.feature.$1.css"},{include:"#rule-list-innards"}]},"font-features":{begin:`(?xi)
((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))
(?=[\\s@'"{;]|/\\*|$)`,beginCaptures:{1:{name:"keyword.control.at-rule.${3:/downcase}.css"},2:{name:"punctuation.definition.keyword.css"}},end:"(?<=})",name:"meta.at-rule.${3:/downcase}.css",patterns:[{begin:"{",beginCaptures:{0:{name:"punctuation.section.property-list.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.property-list.end.bracket.curly.css"}},name:"meta.property-list.font-feature.css",patterns:[{captures:{0:{patterns:[{include:"#escapes"}]}},match:`(?x)
(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )
(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.font-feature.css"},{include:"#rule-list-innards"}]}]},"functional-pseudo-classes":{patterns:[{begin:"(?i)((:)dir)(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{include:"#comment-block"},{include:"#escapes"},{match:"(?i)(?<![\\w-])(ltr|rtl)(?![\\w-])",name:"support.constant.text-direction.css"},{include:"#property-values"}]},{begin:"(?i)((:)lang)(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{match:"(?<=[(,\\s])[a-zA-Z]+(-[a-zA-Z0-9]*|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?=[),\\s])",name:"support.constant.language-range.css"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{include:"#escapes"},{match:'(?<=["\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=["\\s])',name:"support.constant.language-range.css"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.single.css",patterns:[{include:"#escapes"},{match:"(?<=['\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=['\\s])",name:"support.constant.language-range.css"}]},{include:"#commas"}]},{begin:"(?i)((:)(?:not|has|matches|where|is))(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{include:"#selector-innards"}]},{begin:"(?i)((:)nth-(?:last-)?(?:child|of-type))(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{match:"(?i)[+-]?(\\d+n?|n)(\\s*[+-]\\s*\\d+)?",name:"constant.numeric.css"},{match:"(?i)even|odd",name:"support.constant.parity.css"}]}]},functions:{patterns:[{begin:"(?i)(?<![\\w-])(calc)(\\()",beginCaptures:{1:{name:"support.function.calc.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.calc.css",patterns:[{match:"[*/]|(?<=\\s|^)[-+](?=\\s|$)",name:"keyword.operator.arithmetic.css"},{include:"#property-values"}]},{begin:"(?i)(?<![\\w-])(rgba?|rgb|hsla?|hsl|hwb|lab|oklab|lch|oklch|color)(\\()",beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.color.css",patterns:[{include:"#property-values"}]},{begin:`(?xi) (?<![\\w-])
(
(?:-webkit-|-moz-|-o-)?
(?:repeating-)?
(?:linear|radial|conic)
-gradient
)
(\\()`,beginCaptures:{1:{name:"support.function.gradient.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.gradient.css",patterns:[{match:"(?i)(?<![\\w-])(from|to|at|in|hue)(?![\\w-])",name:"keyword.operator.gradient.css"},{include:"#property-values"}]},{begin:"(?i)(?<![\\w-])(-webkit-gradient)(\\()",beginCaptures:{1:{name:"invalid.deprecated.gradient.function.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.gradient.invalid.deprecated.gradient.css",patterns:[{begin:"(?i)(?<![\\w-])(from|to|color-stop)(\\()",beginCaptures:{1:{name:"invalid.deprecated.function.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{include:"#property-values"}]},{include:"#property-values"}]},{begin:`(?xi) (?<![\\w-])
(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?
|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate|color-mix
|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia
|styleset|stylistic|swash|symbols
|cos|sin|tan|acos|asin|atan|atan2|hypot|sqrt|pow|log|exp|abs|sign)
(\\()`,beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.misc.css",patterns:[{match:`(?i)(?<=[,\\s"]|\\*/|^)\\d+x(?=[\\s,"')]|/\\*|$)`,name:"constant.numeric.other.density.css"},{include:"#property-values"},{match:`[^'"),\\s]+`,name:"variable.parameter.misc.css"}]},{begin:"(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()",beginCaptures:{1:{name:"support.function.shape.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.shape.css",patterns:[{match:"(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)",name:"keyword.operator.shape.css"},{include:"#property-values"}]},{begin:"(?i)(?<![\\w-])(cubic-bezier|steps)(\\()",beginCaptures:{1:{name:"support.function.timing-function.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.timing-function.css",patterns:[{match:"(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)",name:"support.constant.step-direction.css"},{include:"#property-values"}]},{begin:`(?xi) (?<![\\w-])
( (?:translate|scale|rotate)(?:[XYZ]|3D)?
| matrix(?:3D)?
| skew[XY]?
| perspective
)
(\\()`,beginCaptures:{1:{name:"support.function.transform.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{include:"#property-values"}]},{include:"#url"},{begin:"(?i)(?<![\\w-])(var)(\\()",beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.variable.css",patterns:[{match:`(?x)
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.argument.css"},{include:"#property-values"}]}]},"media-feature-keywords":{match:`(?xi)
(?<=^|\\s|:|\\*/)
(?: portrait
| landscape
| progressive
| interlace
| fullscreen
| standalone
| minimal-ui
| browser
| hover
)
(?=\\s|\\)|$)`,name:"support.constant.property-value.css"},"media-features":{captures:{1:{name:"support.type.property-name.media.css"},2:{name:"support.type.property-name.media.css"},3:{name:"support.type.vendored.property-name.media.css"}},match:`(?xi)
(?<=^|\\s|\\(|\\*/)
(?:

(
(?:min-|max-)?
(?: height
| width
| aspect-ratio
| color
| color-index
| monochrome
| resolution
)
| grid
| scan
| orientation
| display-mode
| hover
)
|

(
(?:min-|max-)?
device-
(?: height
| width
| aspect-ratio
)
)
|

(
(?:

[-_]
(?: webkit
| apple|khtml
| epub
| moz
| ms
| o
| xv|ah|rim|atsc|
hp|tc|wap|ro
)
|

(?: mso
| prince
)
)
-
[\\w-]+
(?=
\\s*
(?:
/\\*
(?:[^*]|\\*[^/])*
\\*/
)?
\\s*
[:)]
)
)
)
(?=\\s|$|[><:=]|\\)|/\\*)`},"media-query":{begin:"\\G",end:"(?=\\s*[{;])",patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#media-types"},{match:"(?i)(?<=\\s|^|,|\\*/)(only|not)(?=\\s|{|/\\*|$)",name:"keyword.operator.logical.$1.media.css"},{match:"(?i)(?<=\\s|^|\\*/|\\))and(?=\\s|/\\*|$)",name:"keyword.operator.logical.and.media.css"},{match:",(?:(?:\\s*,)+|(?=\\s*[;){]))",name:"invalid.illegal.comma.css"},{include:"#commas"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.css"}},patterns:[{include:"#media-features"},{include:"#media-feature-keywords"},{match:":",name:"punctuation.separator.key-value.css"},{match:">=|<=|=|<|>",name:"keyword.operator.comparison.css"},{captures:{1:{name:"constant.numeric.css"},2:{name:"keyword.operator.arithmetic.css"},3:{name:"constant.numeric.css"}},match:"(\\d+)\\s*(/)\\s*(\\d+)",name:"meta.ratio.css"},{include:"#numeric-values"},{include:"#comment-block"}]}]},"media-query-list":{begin:"(?=\\s*[^{;])",end:"(?=\\s*[{;])",patterns:[{include:"#media-query"}]},"media-types":{captures:{1:{name:"support.constant.media.css"},2:{name:"invalid.deprecated.constant.media.css"}},match:`(?xi)
(?<=^|\\s|,|\\*/)
(?:

(all|print|screen|speech)
|

(aural|braille|embossed|handheld|projection|tty|tv)
)
(?=$|[{,\\s;]|/\\*)`},"numeric-values":{patterns:[{captures:{1:{name:"punctuation.definition.constant.css"}},match:"(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",name:"constant.other.color.rgb-value.hex.css"},{captures:{1:{name:"keyword.other.unit.percentage.css"},2:{name:"keyword.other.unit.${2:/downcase}.css"}},match:`(?xi) (?<![\\w-])
[-+]?

(?:
[0-9]+ (?:\\.[0-9]+)?
| \\.[0-9]+
)

(?:
(?<=[0-9])
E
[-+]?
[0-9]+
)?

(?:
(%)
| ( deg|grad|rad|turn
| Hz|kHz
| ch|cm|em|ex|fr|in|mm|mozmm|
pc|pt|px|q|rem|rch|rex|rlh|
ic|ric|rcap|vh|vw|vb|vi|svh|
svw|svb|svi|dvh|dvw|dvb|dvi|
lvh|lvw|lvb|lvi|vmax|vmin|
cqw|cqi|cqh|cqb|cqmin|cqmax
| dpi|dpcm|dppx
| s|ms
)
\\b
)?`,name:"constant.numeric.css"}]},"property-keywords":{patterns:[{match:`(?xi) (?<![\\w-])
(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse
|always|antialiased|auto|auto-fill|auto-fit|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel
|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets
|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn
|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover
|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures
|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in
|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded
|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze
|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide
|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space
|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start
|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83
|jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB
|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent
|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize
|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures
|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize
|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding
|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line
|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]
|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text
|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate
|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller
|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap
|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table
|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl
|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle
|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical
|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy
|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)
(?![\\w-])`,name:"support.constant.property-value.css"},{match:`(?xi) (?<![\\w-])
(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic
|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am
|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew
|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer
|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek
|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal
|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian
|upper-latin|upper-roman|urdu)
(?![\\w-])`,name:"support.constant.property-value.list-style-type.css"},{match:"(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",name:"support.constant.vendored.property-value.css"},{match:"(?<![\\w-])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![\\w-])",name:"support.constant.font-name.css"}]},"property-names":{patterns:[{match:`(?xi) (?<![\\w-])
(?:

accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration
| animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backdrop-filter
| backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image
| background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border
| border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color
| border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius
| border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image
| border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end
| border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color
| border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width
| border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius
| border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style
| border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side
| caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap
| column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|container|container-name|container-type|content|counter-increment
| counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis
| flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family
| font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch
| font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures
| font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical
| grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start
| grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows
| hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align
| inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation
| justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style
| list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start
| margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset
| mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode
| mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width
| max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position
| offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans
| outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline
| overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]
| pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left
| padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin
| place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align
| ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start
| scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right
| scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom
| scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right
| scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type
| scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size
| speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit
| stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright
| text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style|text-decoration-thickness
| text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation
| text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform
| transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function
| translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change
| word-break|word-spacing|word-wrap|writing-mode|z-index|zoom


| alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile
| color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity
| glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid
| marker-start|r|rx|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap
| stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|x|y


| adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break
| balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length
| bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction
| box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column
| column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break
| delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust
| drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position
| flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before
| hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust
| initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count
| justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift
| line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed
| marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group
| orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range
| play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim
| radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness
| right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color
| rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral
| speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch
| string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height
| text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style
| top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range
| voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap
)
(?![\\w-])`,name:"support.type.property-name.css"},{match:"(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",name:"support.type.vendored.property-name.css"}]},"property-values":{patterns:[{include:"#commas"},{include:"#comment-block"},{include:"#escapes"},{include:"#functions"},{include:"#property-keywords"},{include:"#unicode-range"},{include:"#numeric-values"},{include:"#color-keywords"},{include:"#string"},{match:"!\\s*important(?![\\w-])",name:"keyword.other.important.css"}]},"pseudo-classes":{captures:{1:{name:"punctuation.definition.entity.css"},2:{name:"invalid.illegal.colon.css"}},match:`(?xi)
(:)(:*)
(?: active|any-link|checked|default|disabled|empty|enabled|first
| (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover
| in-range|indeterminate|invalid|left|link|optional|out-of-range
| read-only|read-write|required|right|root|scope|target|unresolved
| valid|visited
)(?![\\w-]|\\s*[;}])`,name:"entity.other.attribute-name.pseudo-class.css"},"pseudo-elements":{captures:{1:{name:"punctuation.definition.entity.css"},2:{name:"punctuation.definition.entity.css"}},match:`(?xi)
(?:
(::?)
(?: after
| before
| first-letter
| first-line
| (?:-(?:ah|apple|atsc|epub|hp|khtml|moz
|ms|o|rim|ro|tc|wap|webkit|xv)
| (?:mso|prince))
-[a-z-]+
)
|
(::)
(?: backdrop
| content
| grammar-error
| marker
| placeholder
| selection
| shadow
| spelling-error
)
)
(?![\\w-]|\\s*[;}])`,name:"entity.other.attribute-name.pseudo-element.css"},"rule-list":{begin:"{",beginCaptures:{0:{name:"punctuation.section.property-list.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.property-list.end.bracket.curly.css"}},name:"meta.property-list.css",patterns:[{include:"#rule-list-innards"}]},"rule-list-innards":{patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#font-features"},{match:`(?x) (?<![\\w-])
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.css"},{begin:"(?<![-a-zA-Z])(?=[-a-zA-Z])",end:"$|(?![-a-zA-Z])",name:"meta.property-name.css",patterns:[{include:"#property-names"}]},{begin:"(:)\\s*",beginCaptures:{1:{name:"punctuation.separator.key-value.css"}},contentName:"meta.property-value.css",end:"\\s*(;)|\\s*(?=}|\\))",endCaptures:{1:{name:"punctuation.terminator.rule.css"}},patterns:[{include:"#comment-block"},{include:"#property-values"}]},{match:";",name:"punctuation.terminator.rule.css"}]},selector:{begin:`(?x)
(?=
(?:\\|)?
(?:
[-\\[:.*\\#a-zA-Z_]
|
[^\\x00-\\x7F]
|
\\\\
(?:[0-9a-fA-F]{1,6}|.)
)
)`,end:"(?=\\s*[/@{)])",name:"meta.selector.css",patterns:[{include:"#selector-innards"}]},"selector-innards":{patterns:[{include:"#comment-block"},{include:"#commas"},{include:"#escapes"},{include:"#combinators"},{captures:{1:{name:"entity.other.namespace-prefix.css"},2:{name:"punctuation.separator.css"}},match:`(?x)
(?:^|(?<=[\\s,(};]))
(?!
[-\\w*]+
\\|
(?!
[-\\[:.*\\#a-zA-Z_]
| [^\\x00-\\x7F]
)
)
(
(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )
(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
|
\\*
)?
(\\|)`},{include:"#tag-names"},{match:"\\*",name:"entity.name.tag.wildcard.css"},{captures:{1:{name:"punctuation.definition.entity.css"},2:{patterns:[{include:"#escapes"}]}},match:`(?x) (?<![@\\w-])
([.\\#])
# Invalid identifier
(
(?:

-?[0-9]
|

-
(?= $
| [\\s,.\\#)\\[:{>+~|]
| /\\*
)
|

(?:
[-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
(?:
[!"'%&(*;<?@^\`|\\]}]
|
/ (?!\\*)
)+
)

(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
)`,name:"invalid.illegal.bad-identifier.css"},{captures:{1:{name:"punctuation.definition.entity.css"},2:{patterns:[{include:"#escapes"}]}},match:`(?x)
(\\.)
(
(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)+
)
(?= $
| [\\s,.\\#)\\[:{>+~|]
| /\\*
)`,name:"entity.other.attribute-name.class.css"},{captures:{1:{name:"punctuation.definition.entity.css"},2:{patterns:[{include:"#escapes"}]}},match:`(?x)
(\\#)
(
-?
(?![0-9])
(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+
)
(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)`,name:"entity.other.attribute-name.id.css"},{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.entity.begin.bracket.square.css"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.entity.end.bracket.square.css"}},name:"meta.attribute-selector.css",patterns:[{include:"#comment-block"},{include:"#string"},{captures:{1:{name:"storage.modifier.ignore-case.css"}},match:`(?<=["'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)`},{captures:{1:{name:"string.unquoted.attribute-value.css",patterns:[{include:"#escapes"}]}},match:`(?x)(?<==)\\s*((?!/\\*)(?:[^\\\\"'\\s\\]]|\\\\.)+)`},{include:"#escapes"},{match:"[~|^$*]?=",name:"keyword.operator.pattern.css"},{match:"\\|",name:"punctuation.separator.css"},{captures:{1:{name:"entity.other.namespace-prefix.css",patterns:[{include:"#escapes"}]}},match:`(?x)
# Qualified namespace prefix
( -?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+
| \\*
)
# Lookahead to ensure there's a valid identifier ahead
(?=
\\| (?!\\s|=|$|\\])
(?: -?(?!\\d)
|   [\\\\\\w-]
|   [^\\x00-\\x7F]
)
)`},{captures:{1:{name:"entity.other.attribute-name.css",patterns:[{include:"#escapes"}]}},match:`(?x)
(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)
\\s*
(?=[~|^\\]$*=]|/\\*)`}]},{include:"#pseudo-classes"},{include:"#pseudo-elements"},{include:"#functional-pseudo-classes"},{match:`(?x) (?<![@\\w-])
(?=
[a-z]
\\w* -
)
(?:
(?![A-Z])
[\\w-]
)+
(?![(\\w-])`,name:"entity.name.tag.custom.css"}]},string:{patterns:[{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"|(?<!\\\\)(?=$|\\n)',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{begin:'(?:\\G|^)(?=(?:[^\\\\"]|\\\\.)+$)',end:"$",name:"invalid.illegal.unclosed.string.css",patterns:[{include:"#escapes"}]},{include:"#escapes"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:"'|(?<!\\\\)(?=$|\\n)",endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.single.css",patterns:[{begin:"(?:\\G|^)(?=(?:[^\\\\']|\\\\.)+$)",end:"$",name:"invalid.illegal.unclosed.string.css",patterns:[{include:"#escapes"}]},{include:"#escapes"}]}]},"tag-names":{match:`(?xi) (?<![\\w:-])
(?:

a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound
| big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command
| content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset
| figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i
| iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark
| marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript
| object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rt|rtc
| ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong
| style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr
| track|tt|u|ul|var|video|wbr|xmp


| altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform
| circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix
| feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap
| feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur
| feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting
| feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name
| font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern
| line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata
| missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor
| stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern


| annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced
| mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot
| mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup
| msup|mtable|mtd|mtext|mtr|munder|munderover|semantics
)
(?=[+~>\\s,.\\#|){:\\[]|/\\*|$)`,name:"entity.name.tag.css"},"unicode-range":{captures:{0:{name:"constant.other.unicode-range.css"},1:{name:"punctuation.separator.dash.unicode-range.css"}},match:"(?<![\\w-])[Uu]\\+[0-9A-Fa-f?]{1,6}(?:(-)[0-9A-Fa-f]{1,6})?(?![\\w-])"},url:{begin:"(?i)(?<![\\w@-])(url)(\\()",beginCaptures:{1:{name:"support.function.url.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.url.css",patterns:[{match:`[^'")\\s]+`,name:"variable.parameter.url.css"},{include:"#string"},{include:"#comment-block"},{include:"#escapes"}]}},scopeName:"source.css"});var n=[a];const i=Object.freeze({displayName:"HTML",injections:{"R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)":{comment:"Uses R: to ensure this matches after any other injections.",patterns:[{match:"<",name:"invalid.illegal.bad-angle-bracket.html"}]}},name:"html",patterns:[{include:"#xml-processing"},{include:"#comment"},{include:"#doctype"},{include:"#cdata"},{include:"#tags-valid"},{include:"#tags-invalid"},{include:"#entities"}],repository:{attribute:{patterns:[{begin:"(s(hape|cope|t(ep|art)|ize(s)?|p(ellcheck|an)|elected|lot|andbox|rc(set|doc|lang)?)|h(ttp-equiv|i(dden|gh)|e(ight|aders)|ref(lang)?)|n(o(nce|validate|module)|ame)|c(h(ecked|arset)|ite|o(nt(ent(editable)?|rols)|ords|l(s(pan)?|or))|lass|rossorigin)|t(ype(mustmatch)?|itle|a(rget|bindex)|ranslate)|i(s(map)?|n(tegrity|putmode)|tem(scope|type|id|prop|ref)|d)|op(timum|en)|d(i(sabled|r(name)?)|ownload|e(coding|f(er|ault))|at(etime|a)|raggable)|usemap|p(ing|oster|la(ysinline|ceholder)|attern|reload)|enctype|value|kind|for(m(novalidate|target|enctype|action|method)?)?|w(idth|rap)|l(ist|o(op|w)|a(ng|bel))|a(s(ync)?|c(ce(sskey|pt(-charset)?)|tion)|uto(c(omplete|apitalize)|play|focus)|l(t|low(usermedia|paymentrequest|fullscreen))|bbr)|r(ows(pan)?|e(versed|quired|ferrerpolicy|l|adonly))|m(in(length)?|u(ted|ltiple)|e(thod|dia)|a(nifest|x(length)?)))(?![\\w:-])",beginCaptures:{0:{name:"entity.other.attribute-name.html"}},comment:"HTML5 attributes, not event handlers",end:"(?=\\s*+[^=\\s])",name:"meta.attribute.$1.html",patterns:[{include:"#attribute-interior"}]},{begin:"style(?![\\w:-])",beginCaptures:{0:{name:"entity.other.attribute-name.html"}},comment:"HTML5 style attribute",end:"(?=\\s*+[^=\\s])",name:"meta.attribute.style.html",patterns:[{begin:"=",beginCaptures:{0:{name:"punctuation.separator.key-value.html"}},end:"(?<=[^\\s=])(?!\\s*=)|(?=/?>)",patterns:[{begin:"(?=[^\\s=<>`/]|/(?!>))",end:"(?!\\G)",name:"meta.embedded.line.css",patterns:[{captures:{0:{name:"source.css"}},match:"([^\\s\"'=<>`/]|/(?!>))+",name:"string.unquoted.html"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},contentName:"source.css",end:'(")',endCaptures:{0:{name:"punctuation.definition.string.end.html"},1:{name:"source.css"}},name:"string.quoted.double.html",patterns:[{include:"#entities"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},contentName:"source.css",end:"(')",endCaptures:{0:{name:"punctuation.definition.string.end.html"},1:{name:"source.css"}},name:"string.quoted.single.html",patterns:[{include:"#entities"}]}]},{match:"=",name:"invalid.illegal.unexpected-equals-sign.html"}]}]},{begin:"on(s(croll|t(orage|alled)|u(spend|bmit)|e(curitypolicyviolation|ek(ing|ed)|lect))|hashchange|c(hange|o(ntextmenu|py)|u(t|echange)|l(ick|ose)|an(cel|play(through)?))|t(imeupdate|oggle)|in(put|valid)|o(nline|ffline)|d(urationchange|r(op|ag(start|over|e(n(ter|d)|xit)|leave)?)|blclick)|un(handledrejection|load)|p(opstate|lay(ing)?|a(ste|use|ge(show|hide))|rogress)|e(nded|rror|mptied)|volumechange|key(down|up|press)|focus|w(heel|aiting)|l(oad(start|e(nd|d(data|metadata)))?|anguagechange)|a(uxclick|fterprint|bort)|r(e(s(ize|et)|jectionhandled)|atechange)|m(ouse(o(ut|ver)|down|up|enter|leave|move)|essage(error)?)|b(efore(unload|print)|lur))(?![\\w:-])",beginCaptures:{0:{name:"entity.other.attribute-name.html"}},comment:"HTML5 attributes, event handlers",end:"(?=\\s*+[^=\\s])",name:"meta.attribute.event-handler.$1.html",patterns:[{begin:"=",beginCaptures:{0:{name:"punctuation.separator.key-value.html"}},end:"(?<=[^\\s=])(?!\\s*=)|(?=/?>)",patterns:[{begin:"(?=[^\\s=<>`/]|/(?!>))",end:"(?!\\G)",name:"meta.embedded.line.js",patterns:[{captures:{0:{name:"source.js"},1:{patterns:[{include:"source.js"}]}},match:"(([^\\s\"'=<>`/]|/(?!>))+)",name:"string.unquoted.html"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},contentName:"source.js",end:'(")',endCaptures:{0:{name:"punctuation.definition.string.end.html"},1:{name:"source.js"}},name:"string.quoted.double.html",patterns:[{captures:{0:{patterns:[{include:"source.js"}]}},match:'([^\\n"/]|/(?![/*]))+'},{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.js"}},end:'(?=")|\\n',name:"comment.line.double-slash.js"},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.js"}},end:'(?=")|\\*/',endCaptures:{0:{name:"punctuation.definition.comment.end.js"}},name:"comment.block.js"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},contentName:"source.js",end:"(')",endCaptures:{0:{name:"punctuation.definition.string.end.html"},1:{name:"source.js"}},name:"string.quoted.single.html",patterns:[{captures:{0:{patterns:[{include:"source.js"}]}},match:"([^\\n'/]|/(?![/*]))+"},{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.js"}},end:"(?=')|\\n",name:"comment.line.double-slash.js"},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.js"}},end:"(?=')|\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.js"}},name:"comment.block.js"}]}]},{match:"=",name:"invalid.illegal.unexpected-equals-sign.html"}]}]},{begin:"(data-[a-z\\-]+)(?![\\w:-])",beginCaptures:{0:{name:"entity.other.attribute-name.html"}},comment:"HTML5 attributes, data-*",end:"(?=\\s*+[^=\\s])",name:"meta.attribute.data-x.$1.html",patterns:[{include:"#attribute-interior"}]},{begin:"(align|bgcolor|border)(?![\\w:-])",beginCaptures:{0:{name:"invalid.deprecated.entity.other.attribute-name.html"}},comment:"HTML attributes, deprecated",end:"(?=\\s*+[^=\\s])",name:"meta.attribute.$1.html",patterns:[{include:"#attribute-interior"}]},{begin:`([^\\x{0020}"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)`,beginCaptures:{0:{name:"entity.other.attribute-name.html"}},comment:"Anything else that is valid",end:"(?=\\s*+[^=\\s])",name:"meta.attribute.unrecognized.$1.html",patterns:[{include:"#attribute-interior"}]},{match:"[^\\s>]+",name:"invalid.illegal.character-not-allowed-here.html"}]},"attribute-interior":{patterns:[{begin:"=",beginCaptures:{0:{name:"punctuation.separator.key-value.html"}},end:"(?<=[^\\s=])(?!\\s*=)|(?=/?>)",patterns:[{match:"([^\\s\"'=<>`/]|/(?!>))+",name:"string.unquoted.html"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.html"}},name:"string.quoted.double.html",patterns:[{include:"#entities"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.html"}},name:"string.quoted.single.html",patterns:[{include:"#entities"}]},{match:"=",name:"invalid.illegal.unexpected-equals-sign.html"}]}]},cdata:{begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.tag.begin.html"}},contentName:"string.other.inline-data.html",end:"]]>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.cdata.html"},comment:{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.html"}},end:"-->",name:"comment.block.html",patterns:[{match:"\\G-?>",name:"invalid.illegal.characters-not-allowed-here.html"},{match:"<!--(?!>)|<!-(?=-->)",name:"invalid.illegal.characters-not-allowed-here.html"},{match:"--!>",name:"invalid.illegal.characters-not-allowed-here.html"}]},"core-minus-invalid":{comment:"This should be the root pattern array includes minus #tags-invalid",patterns:[{include:"#xml-processing"},{include:"#comment"},{include:"#doctype"},{include:"#cdata"},{include:"#tags-valid"},{include:"#entities"}]},doctype:{begin:"<!(?=(?i:DOCTYPE\\s))",beginCaptures:{0:{name:"punctuation.definition.tag.begin.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.doctype.html",patterns:[{match:"\\G(?i:DOCTYPE)",name:"entity.name.tag.html"},{begin:'"',end:'"',name:"string.quoted.double.html"},{match:"[^\\s>]+",name:"entity.other.attribute-name.html"}]},entities:{patterns:[{captures:{1:{name:"punctuation.definition.entity.html"},912:{name:"punctuation.definition.entity.html"}},comment:"Yes this is a bit ridiculous, there are quite a lot of these",match:`(?x)
(&)	(?=[a-zA-Z])
(
(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))
| (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))
| (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))
| (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))
| (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))
| (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))
| (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))
| (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))
| (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))
| (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))
| (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))
| (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))
| (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))
| (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))
| (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))
| (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))
| (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))
| (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))
| (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))
| (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))
| (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))
| (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))
| (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))
| (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))
| (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))
| (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))
)
(;)
`,name:"constant.character.entity.named.$2.html"},{captures:{1:{name:"punctuation.definition.entity.html"},3:{name:"punctuation.definition.entity.html"}},match:"(&)#[0-9]+(;)",name:"constant.character.entity.numeric.decimal.html"},{captures:{1:{name:"punctuation.definition.entity.html"},3:{name:"punctuation.definition.entity.html"}},match:"(&)#[xX][0-9a-fA-F]+(;)",name:"constant.character.entity.numeric.hexadecimal.html"},{match:"&(?=[a-zA-Z0-9]+;)",name:"invalid.illegal.ambiguous-ampersand.html"}]},math:{patterns:[{begin:`(?i)(<)(math)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.structure.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)",endCaptures:{0:{name:"meta.tag.structure.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.structure.$2.html",patterns:[{begin:"(?<!>)\\G",end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]}],repository:{attribute:{patterns:[{begin:"(s(hift|ymmetric|cript(sizemultiplier|level|minsize)|t(ackalign|retchy)|ide|u(pscriptshift|bscriptshift)|e(parator(s)?|lection)|rc)|h(eight|ref)|n(otation|umalign)|c(haralign|olumn(spa(n|cing)|width|lines|align)|lose|rossout)|i(n(dent(shift(first|last)?|target|align(first|last)?)|fixlinebreakstyle)|d)|o(pen|verflow)|d(i(splay(style)?|r)|e(nomalign|cimalpoint|pth))|position|e(dge|qual(columns|rows))|voffset|f(orm|ence|rame(spacing)?)|width|l(space|ine(thickness|leading|break(style|multchar)?)|o(ngdivstyle|cation)|ength|quote|argeop)|a(c(cent(under)?|tiontype)|l(t(text|img(-(height|valign|width))?)|ign(mentscope)?))|r(space|ow(spa(n|cing)|lines|align)|quote)|groupalign|x(link:href|mlns)|m(in(size|labelspacing)|ovablelimits|a(th(size|color|variant|background)|xsize))|bevelled)(?![\\w:-])",beginCaptures:{0:{name:"entity.other.attribute-name.html"}},end:"(?=\\s*+[^=\\s])",name:"meta.attribute.$1.html",patterns:[{include:"#attribute-interior"}]},{begin:`([^\\x{0020}"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)`,beginCaptures:{0:{name:"entity.other.attribute-name.html"}},comment:"Anything else that is valid",end:"(?=\\s*+[^=\\s])",name:"meta.attribute.unrecognized.$1.html",patterns:[{include:"#attribute-interior"}]},{match:"[^\\s>]+",name:"invalid.illegal.character-not-allowed-here.html"}]},tags:{patterns:[{include:"#comment"},{include:"#cdata"},{captures:{0:{name:"meta.tag.structure.math.$2.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.structure.math.$2.html"},{begin:`(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.structure.math.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.structure.math.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"},4:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.structure.math.$2.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{captures:{0:{name:"meta.tag.inline.math.$2.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(mi|mn|mo|ms|mspace|mtext|maligngroup|malignmark)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.inline.math.$2.html"},{begin:`(?i)(<)(mi|mn|mo|ms|mspace|mtext|maligngroup|malignmark)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.inline.math.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.inline.math.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"},4:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.inline.math.$2.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.inline.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{captures:{0:{name:"meta.tag.object.math.$2.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(mglyph)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.object.math.$2.html"},{begin:`(?i)(<)(mglyph)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.object.math.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.object.math.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"},4:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.object.math.$2.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.object.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{captures:{0:{name:"meta.tag.other.invalid.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.unrecognized-tag.html"},4:{patterns:[{include:"#attribute"}]},6:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(([\\w:]+))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.other.invalid.html"},{begin:`(?i)(<)((\\w[^\\s>]*))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.other.invalid.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.unrecognized-tag.html"},4:{patterns:[{include:"#attribute"}]},6:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.other.invalid.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.unrecognized-tag.html"},4:{name:"punctuation.definition.tag.end.html"},5:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.other.invalid.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.other.invalid.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{include:"#tags-invalid"}]}}},svg:{patterns:[{begin:`(?i)(<)(svg)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.structure.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)",endCaptures:{0:{name:"meta.tag.structure.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.structure.$2.html",patterns:[{begin:"(?<!>)\\G",end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]}],repository:{attribute:{patterns:[{begin:"(s(hape-rendering|ystemLanguage|cale|t(yle|itchTiles|op-(color|opacity)|dDeviation|em(h|v)|artOffset|r(i(ng|kethrough-(thickness|position))|oke(-(opacity|dash(offset|array)|width|line(cap|join)|miterlimit))?))|urfaceScale|p(e(cular(Constant|Exponent)|ed)|acing|readMethod)|eed|lope)|h(oriz-(origin-x|adv-x)|eight|anging|ref(lang)?)|y(1|2|ChannelSelector)?|n(umOctaves|ame)|c(y|o(ntentS(criptType|tyleType)|lor(-(interpolation(-filters)?|profile|rendering))?)|ursor|l(ip(-(path|rule)|PathUnits)?|ass)|a(p-height|lcMode)|x)|t(ype|o|ext(-(decoration|anchor|rendering)|Length)|a(rget(X|Y)?|b(index|leValues))|ransform)|i(n(tercept|2)?|d(eographic)?|mage-rendering)|z(oomAndPan)?|o(p(erator|acity)|ver(flow|line-(thickness|position))|ffset|r(i(ent(ation)?|gin)|der))|d(y|i(splay|visor|ffuseConstant|rection)|ominant-baseline|ur|e(scent|celerate)|x)?|u(1|n(i(code(-(range|bidi))?|ts-per-em)|derline-(thickness|position))|2)|p(ing|oint(s(At(X|Y|Z))?|er-events)|a(nose-1|t(h(Length)?|tern(ContentUnits|Transform|Units))|int-order)|r(imitiveUnits|eserveA(spectRatio|lpha)))|e(n(d|able-background)|dgeMode|levation|x(ternalResourcesRequired|ponent))|v(i(sibility|ew(Box|Target))|-(hanging|ideographic|alphabetic|mathematical)|e(ctor-effect|r(sion|t-(origin-(y|x)|adv-y)))|alues)|k(1|2|3|e(y(Splines|Times|Points)|rn(ing|el(Matrix|UnitLength)))|4)?|f(y|il(ter(Res|Units)?|l(-(opacity|rule))?)|o(nt-(s(t(yle|retch)|ize(-adjust)?)|variant|family|weight)|rmat)|lood-(color|opacity)|r(om)?|x)|w(idth(s)?|ord-spacing|riting-mode)|l(i(ghting-color|mitingConeAngle)|ocal|e(ngthAdjust|tter-spacing)|ang)|a(scent|cc(umulate|ent-height)|ttribute(Name|Type)|zimuth|dditive|utoReverse|l(ignment-baseline|phabetic|lowReorder)|rabic-form|mplitude)|r(y|otate|e(s(tart|ult)|ndering-intent|peat(Count|Dur)|quired(Extensions|Features)|f(X|Y|errerPolicy)|l)|adius|x)?|g(1|2|lyph(Ref|-(name|orientation-(horizontal|vertical)))|radient(Transform|Units))|x(1|2|ChannelSelector|-height|link:(show|href|t(ype|itle)|a(ctuate|rcrole)|role)|ml:(space|lang|base))?|m(in|ode|e(thod|dia)|a(sk(ContentUnits|Units)?|thematical|rker(Height|-(start|end|mid)|Units|Width)|x))|b(y|ias|egin|ase(Profile|line-shift|Frequency)|box))(?![\\w:-])",beginCaptures:{0:{name:"entity.other.attribute-name.html"}},end:"(?=\\s*+[^=\\s])",name:"meta.attribute.$1.html",patterns:[{include:"#attribute-interior"}]},{begin:`([^\\x{0020}"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)`,beginCaptures:{0:{name:"entity.other.attribute-name.html"}},comment:"Anything else that is valid",end:"(?=\\s*+[^=\\s])",name:"meta.attribute.unrecognized.$1.html",patterns:[{include:"#attribute-interior"}]},{match:"[^\\s>]+",name:"invalid.illegal.character-not-allowed-here.html"}]},tags:{patterns:[{include:"#comment"},{include:"#cdata"},{captures:{0:{name:"meta.tag.metadata.svg.$2.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.metadata.svg.$2.html"},{begin:`(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.metadata.svg.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.metadata.svg.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"},4:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.metadata.svg.$2.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{captures:{0:{name:"meta.tag.structure.svg.$2.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.structure.svg.$2.html"},{begin:`(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.structure.svg.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.structure.svg.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"},4:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.structure.svg.$2.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{captures:{0:{name:"meta.tag.inline.svg.$2.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.inline.svg.$2.html"},{begin:`(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.inline.svg.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.inline.svg.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"},4:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.inline.svg.$2.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.inline.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{captures:{0:{name:"meta.tag.object.svg.$2.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.object.svg.$2.html"},{begin:`(?i)(<)(a|circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.object.svg.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{patterns:[{include:"#attribute"}]},5:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.object.svg.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"},4:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.object.svg.$2.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.object.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{captures:{0:{name:"meta.tag.other.svg.$2.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"},4:{patterns:[{include:"#attribute"}]},6:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.other.svg.$2.html"},{begin:`(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.other.svg.$2.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"},4:{patterns:[{include:"#attribute"}]},6:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.other.svg.$2.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"},4:{name:"punctuation.definition.tag.end.html"},5:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.other.svg.$2.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.other.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{captures:{0:{name:"meta.tag.other.invalid.void.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.unrecognized-tag.html"},4:{patterns:[{include:"#attribute"}]},6:{name:"punctuation.definition.tag.end.html"}},match:`(?i)(<)(([\\w:]+))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,name:"meta.element.other.invalid.html"},{begin:`(?i)(<)((\\w[^\\s>]*))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,beginCaptures:{0:{name:"meta.tag.other.invalid.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.unrecognized-tag.html"},4:{patterns:[{include:"#attribute"}]},6:{name:"punctuation.definition.tag.end.html"}},end:"(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",endCaptures:{0:{name:"meta.tag.other.invalid.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.unrecognized-tag.html"},4:{name:"punctuation.definition.tag.end.html"},5:{name:"punctuation.definition.tag.end.html"}},name:"meta.element.other.invalid.html",patterns:[{begin:"(?<!>)\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.other.invalid.start.html",patterns:[{include:"#attribute"}]},{include:"#tags"}]},{include:"#tags-invalid"}]}}},"tags-invalid":{patterns:[{begin:"(</?)((\\w[^\\s>]*))(?<!/)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.unrecognized-tag.html"}},end:"((?: ?/)?>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.other.$2.html",patterns:[{include:"#attribute"}]}]},"tags-valid":{patterns:[{begin:"(^[ \\t]+)?(?=<(?i:style)\\b(?!-))",beginCaptures:{1:{name:"punctuation.whitespace.embedded.leading.html"}},end:"(?!\\G)([ \\t]*$\\n?)?",endCaptures:{1:{name:"punctuation.whitespace.embedded.trailing.html"}},patterns:[{begin:"(?i)(<)(style)(?=\\s|/?>)",beginCaptures:{0:{name:"meta.tag.metadata.style.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:"(?i)((<)/)(style)\\s*(>)",endCaptures:{0:{name:"meta.tag.metadata.style.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"source.css-ignored-vscode"},3:{name:"entity.name.tag.html"},4:{name:"punctuation.definition.tag.end.html"}},name:"meta.embedded.block.html",patterns:[{begin:"\\G",captures:{1:{name:"punctuation.definition.tag.end.html"}},end:"(>)",name:"meta.tag.metadata.style.start.html",patterns:[{include:"#attribute"}]},{begin:"(?!\\G)",end:"(?=</(?i:style))",name:"source.css",patterns:[{include:"source.css"}]}]}]},{begin:"(^[ \\t]+)?(?=<(?i:script)\\b(?!-))",beginCaptures:{1:{name:"punctuation.whitespace.embedded.leading.html"}},end:"(?!\\G)([ \\t]*$\\n?)?",endCaptures:{1:{name:"punctuation.whitespace.embedded.trailing.html"}},patterns:[{begin:"(<)((?i:script))\\b",beginCaptures:{0:{name:"meta.tag.metadata.script.start.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:"(/)((?i:script))(>)",endCaptures:{0:{name:"meta.tag.metadata.script.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"punctuation.definition.tag.end.html"}},name:"meta.embedded.block.html",patterns:[{begin:"\\G",end:"(?=/)",patterns:[{begin:"(>)",beginCaptures:{0:{name:"meta.tag.metadata.script.start.html"},1:{name:"punctuation.definition.tag.end.html"}},end:"((<))(?=/(?i:script))",endCaptures:{0:{name:"meta.tag.metadata.script.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"source.js-ignored-vscode"}},patterns:[{begin:"\\G",end:"(?=</(?i:script))",name:"source.js",patterns:[{begin:"(^[ \\t]+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.js"}},end:"(?!\\G)",patterns:[{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.js"}},end:"(?=<\/script)|\\n",name:"comment.line.double-slash.js"}]},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.js"}},end:"\\*/|(?=<\/script)",name:"comment.block.js"},{include:"source.js"}]}]},{begin:"\\G",end:`(?ix:
(?=>
| type(?=[\\s=])
(?!\\s*=\\s*
(
''
| ""
| ('|"|)
(
text/
(
javascript(1\\.[0-5])?
| x-javascript
| jscript
| livescript
| (x-)?ecmascript
| babel

)
| application/
(
(x-)?javascript
| (x-)?ecmascript
)
| module
)
[\\s"'>]
)
)
)
)`,name:"meta.tag.metadata.script.start.html",patterns:[{include:"#attribute"}]},{begin:`(?ix:
(?=
type\\s*=\\s*
('|"|)
text/
(
x-handlebars
| (x-(handlebars-)?|ng-)?template
| html
)
[\\s"'>]
)
)`,end:"((<))(?=/(?i:script))",endCaptures:{0:{name:"meta.tag.metadata.script.end.html"},1:{name:"punctuation.definition.tag.begin.html"},2:{name:"text.html.basic"}},patterns:[{begin:"\\G",end:"(>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.script.start.html",patterns:[{include:"#attribute"}]},{begin:"(?!\\G)",end:"(?=</(?i:script))",name:"text.html.basic",patterns:[{include:"text.html.basic"}]}]},{begin:"(?=(?i:type))",end:"(<)(?=/(?i:script))",endCaptures:{0:{name:"meta.tag.metadata.script.end.html"},1:{name:"punctuation.definition.tag.begin.html"}},patterns:[{begin:"\\G",end:"(>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.script.start.html",patterns:[{include:"#attribute"}]},{begin:"(?!\\G)",end:"(?=</(?i:script))",name:"source.unknown"}]}]}]}]},{begin:"(?i)(<)(base|link|meta)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.$2.void.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)(noscript|title)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.$2.start.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(</)(noscript|title)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.$2.end.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)(col|hr|input)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.$2.void.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.$2.start.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(</)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.$2.end.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)(area|br|wbr)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.inline.$2.void.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.inline.$2.start.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(</)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.inline.$2.end.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)(embed|img|param|source|track)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.object.$2.void.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)(audio|canvas|iframe|object|picture|video)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.object.$2.start.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(</)(audio|canvas|iframe|object|picture|video)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.object.$2.end.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)((basefont|isindex))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.metadata.$2.void.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)((center|frameset|noembed|noframes))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.$2.start.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(</)((center|frameset|noembed|noframes))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.structure.$2.end.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)((acronym|big|blink|font|strike|tt|xmp))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.inline.$2.start.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(</)((acronym|big|blink|font|strike|tt|xmp))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.inline.$2.end.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)((frame))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.object.$2.void.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)((applet))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.object.$2.start.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(</)((applet))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.deprecated.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.object.$2.end.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(<)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.no-longer-supported.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.other.$2.start.html",patterns:[{include:"#attribute"}]},{begin:"(?i)(</)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"},3:{name:"invalid.illegal.no-longer-supported.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.other.$2.end.html",patterns:[{include:"#attribute"}]},{include:"#math"},{include:"#svg"},{begin:"(<)([a-zA-Z][.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*-[\\-.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.custom.start.html",patterns:[{include:"#attribute"}]},{begin:"(</)([a-zA-Z][.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*-[\\-.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:">",endCaptures:{0:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.custom.end.html",patterns:[{include:"#attribute"}]}]},"xml-processing":{begin:"(<\\?)(xml)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.html"}},end:"(\\?>)",name:"meta.tag.metadata.processing.xml.html",patterns:[{include:"#attribute"}]}},scopeName:"text.html.basic",embeddedLangs:["javascript","css"]});var r=[...e,...n,i];const s=Object.freeze({displayName:"Java",name:"java",patterns:[{begin:"\\b(package)\\b\\s*",beginCaptures:{1:{name:"keyword.other.package.java"}},contentName:"storage.modifier.package.java",end:"\\s*(;)",endCaptures:{1:{name:"punctuation.terminator.java"}},name:"meta.package.java",patterns:[{include:"#comments"},{match:"(?<=\\.)\\s*\\.|\\.(?=\\s*;)",name:"invalid.illegal.character_not_allowed_here.java"},{match:"(?<!_)_(?=\\s*(\\.|;))|\\b\\d+|-+",name:"invalid.illegal.character_not_allowed_here.java"},{match:"[A-Z]+",name:"invalid.deprecated.package_name_not_lowercase.java"},{match:`(?x)\\b(?<!\\$)
(abstract|assert|boolean|break|byte|case|catch|char|class|
const|continue|default|do|double|else|enum|extends|final|
finally|float|for|goto|if|implements|import|instanceof|int|
interface|long|native|new|non-sealed|package|permits|private|protected|public|
return|sealed|short|static|strictfp|super|switch|syncronized|this|
throw|throws|transient|try|void|volatile|while|yield|
true|false|null)\\b`,name:"invalid.illegal.character_not_allowed_here.java"},{match:"\\.",name:"punctuation.separator.java"}]},{begin:"\\b(import)\\b\\s*\\b(static)?\\b\\s",beginCaptures:{1:{name:"keyword.other.import.java"},2:{name:"storage.modifier.java"}},contentName:"storage.modifier.import.java",end:"\\s*(;)",endCaptures:{1:{name:"punctuation.terminator.java"}},name:"meta.import.java",patterns:[{include:"#comments"},{match:"(?<=\\.)\\s*\\.|\\.(?=\\s*;)",name:"invalid.illegal.character_not_allowed_here.java"},{match:"(?<!\\.)\\s*\\*",name:"invalid.illegal.character_not_allowed_here.java"},{match:"(?<!_)_(?=\\s*(\\.|;))|\\b\\d+|-+",name:"invalid.illegal.character_not_allowed_here.java"},{match:`(?x)\\b(?<!\\$)
(abstract|assert|boolean|break|byte|case|catch|char|class|
const|continue|default|do|double|else|enum|extends|final|
finally|float|for|goto|if|implements|import|instanceof|int|
interface|long|native|new|non-sealed|package|permits|private|protected|public|
return|sealed|short|static|strictfp|super|switch|syncronized|this|
throw|throws|transient|try|void|volatile|while|yield|
true|false|null)\\b`,name:"invalid.illegal.character_not_allowed_here.java"},{match:"\\.",name:"punctuation.separator.java"},{match:"\\*",name:"variable.language.wildcard.java"}]},{include:"#comments-javadoc"},{include:"#code"},{include:"#module"}],repository:{"all-types":{patterns:[{include:"#primitive-arrays"},{include:"#primitive-types"},{include:"#object-types"}]},annotations:{patterns:[{begin:"((@)\\s*([^\\s(]+))(\\()",beginCaptures:{2:{name:"punctuation.definition.annotation.java"},3:{name:"storage.type.annotation.java"},4:{name:"punctuation.definition.annotation-arguments.begin.bracket.round.java"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.annotation-arguments.end.bracket.round.java"}},name:"meta.declaration.annotation.java",patterns:[{captures:{1:{name:"constant.other.key.java"},2:{name:"keyword.operator.assignment.java"}},match:"(\\w*)\\s*(=)"},{include:"#code"}]},{captures:{1:{name:"punctuation.definition.annotation.java"},2:{name:"storage.modifier.java"},3:{name:"storage.type.annotation.java"},5:{name:"punctuation.definition.annotation.java"},6:{name:"storage.type.annotation.java"}},match:"(@)(interface)\\s+(\\w*)|((@)\\s*(\\w+))",name:"meta.declaration.annotation.java"}]},"anonymous-block-and-instance-initializer":{begin:"{",beginCaptures:{0:{name:"punctuation.section.block.begin.bracket.curly.java"}},end:"}",endCaptures:{0:{name:"punctuation.section.block.end.bracket.curly.java"}},patterns:[{include:"#code"}]},"anonymous-classes-and-new":{begin:"\\bnew\\b",beginCaptures:{0:{name:"keyword.control.new.java"}},end:"(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",patterns:[{include:"#comments"},{include:"#function-call"},{include:"#all-types"},{begin:"(?<=\\))",end:"(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",patterns:[{include:"#comments"},{begin:"{",beginCaptures:{0:{name:"punctuation.section.inner-class.begin.bracket.curly.java"}},end:"}",endCaptures:{0:{name:"punctuation.section.inner-class.end.bracket.curly.java"}},name:"meta.inner-class.java",patterns:[{include:"#class-body"}]}]},{begin:"(?<=\\])",end:"(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",patterns:[{include:"#comments"},{begin:"{",beginCaptures:{0:{name:"punctuation.section.array-initializer.begin.bracket.curly.java"}},end:"}",endCaptures:{0:{name:"punctuation.section.array-initializer.end.bracket.curly.java"}},name:"meta.array-initializer.java",patterns:[{include:"#code"}]}]},{include:"#parens"}]},assertions:{patterns:[{begin:"\\b(assert)\\s",beginCaptures:{1:{name:"keyword.control.assert.java"}},end:"$",name:"meta.declaration.assertion.java",patterns:[{match:":",name:"keyword.operator.assert.expression-separator.java"},{include:"#code"}]}]},class:{begin:"(?=\\w?[\\w\\s-]*\\b(?:class|(?<!@)interface|enum)\\s+[\\w$]+)",end:"}",endCaptures:{0:{name:"punctuation.section.class.end.bracket.curly.java"}},name:"meta.class.java",patterns:[{include:"#storage-modifiers"},{include:"#generics"},{include:"#comments"},{captures:{1:{name:"storage.modifier.java"},2:{name:"entity.name.type.class.java"}},match:"(class|(?<!@)interface|enum)\\s+([\\w$]+)",name:"meta.class.identifier.java"},{begin:"extends",beginCaptures:{0:{name:"storage.modifier.extends.java"}},end:"(?={|implements|permits)",name:"meta.definition.class.inherited.classes.java",patterns:[{include:"#object-types-inherited"},{include:"#comments"}]},{begin:"(implements)\\s",beginCaptures:{1:{name:"storage.modifier.implements.java"}},end:"(?=\\s*extends|permits|\\{)",name:"meta.definition.class.implemented.interfaces.java",patterns:[{include:"#object-types-inherited"},{include:"#comments"}]},{begin:"(permits)\\s",beginCaptures:{1:{name:"storage.modifier.permits.java"}},end:"(?=\\s*extends|implements|\\{)",name:"meta.definition.class.permits.classes.java",patterns:[{include:"#object-types-inherited"},{include:"#comments"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.class.begin.bracket.curly.java"}},contentName:"meta.class.body.java",end:"(?=})",patterns:[{include:"#class-body"}]}]},"class-body":{patterns:[{include:"#comments-javadoc"},{include:"#comments"},{include:"#enums"},{include:"#class"},{include:"#generics"},{include:"#static-initializer"},{include:"#class-fields-and-methods"},{include:"#annotations"},{include:"#storage-modifiers"},{include:"#member-variables"},{include:"#code"}]},"class-fields-and-methods":{patterns:[{begin:"(?=\\=)",end:"(?=;)",patterns:[{include:"#code"}]},{include:"#methods"}]},code:{patterns:[{include:"#annotations"},{include:"#comments"},{include:"#enums"},{include:"#class"},{include:"#record"},{include:"#anonymous-block-and-instance-initializer"},{include:"#try-catch-finally"},{include:"#assertions"},{include:"#parens"},{include:"#constants-and-special-vars"},{include:"#numbers"},{include:"#anonymous-classes-and-new"},{include:"#lambda-expression"},{include:"#keywords"},{include:"#storage-modifiers"},{include:"#method-call"},{include:"#function-call"},{include:"#variables"},{include:"#variables-local"},{include:"#objects"},{include:"#properties"},{include:"#strings"},{include:"#all-types"},{match:",",name:"punctuation.separator.delimiter.java"},{match:"\\.",name:"punctuation.separator.period.java"},{match:";",name:"punctuation.terminator.java"}]},comments:{patterns:[{captures:{0:{name:"punctuation.definition.comment.java"}},match:"/\\*\\*/",name:"comment.block.empty.java"},{include:"#comments-inline"}]},"comments-inline":{patterns:[{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.java"}},end:"\\*/",name:"comment.block.java"},{begin:"(^[ \\t]+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.java"}},end:"(?!\\G)",patterns:[{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.java"}},end:"\\n",name:"comment.line.double-slash.java"}]}]},"comments-javadoc":{patterns:[{begin:"^\\s*(/\\*\\*)(?!/)",beginCaptures:{1:{name:"punctuation.definition.comment.java"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.java"}},name:"comment.block.javadoc.java",patterns:[{match:"@(author|deprecated|return|see|serial|since|version)\\b",name:"keyword.other.documentation.javadoc.java"},{captures:{1:{name:"keyword.other.documentation.javadoc.java"},2:{name:"variable.parameter.java"}},match:"(@param)\\s+(\\S+)"},{captures:{1:{name:"keyword.other.documentation.javadoc.java"},2:{name:"entity.name.type.class.java"}},match:"(@(?:exception|throws))\\s+(\\S+)"},{captures:{1:{name:"keyword.other.documentation.javadoc.java"},2:{name:"entity.name.type.class.java"},3:{name:"variable.parameter.java"}},match:"{(@link)\\s+(\\S+)?#([\\w$]+\\s*\\([^\\(\\)]*\\)).*?}"}]}]},"constants-and-special-vars":{patterns:[{match:"\\b(true|false|null)\\b",name:"constant.language.java"},{match:"\\bthis\\b",name:"variable.language.this.java"},{match:"\\bsuper\\b",name:"variable.language.java"}]},enums:{begin:"^\\s*([\\w\\s]*)(enum)\\s+(\\w+)",beginCaptures:{1:{patterns:[{include:"#storage-modifiers"}]},2:{name:"storage.modifier.java"},3:{name:"entity.name.type.enum.java"}},end:"}",endCaptures:{0:{name:"punctuation.section.enum.end.bracket.curly.java"}},name:"meta.enum.java",patterns:[{begin:"\\b(extends)\\b",beginCaptures:{1:{name:"storage.modifier.extends.java"}},end:"(?={|\\bimplements\\b)",name:"meta.definition.class.inherited.classes.java",patterns:[{include:"#object-types-inherited"},{include:"#comments"}]},{begin:"\\b(implements)\\b",beginCaptures:{1:{name:"storage.modifier.implements.java"}},end:"(?={|\\bextends\\b)",name:"meta.definition.class.implemented.interfaces.java",patterns:[{include:"#object-types-inherited"},{include:"#comments"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.enum.begin.bracket.curly.java"}},end:"(?=})",patterns:[{begin:"(?<={)",end:"(?=;|})",patterns:[{include:"#comments-javadoc"},{include:"#comments"},{begin:"\\b(\\w+)\\b",beginCaptures:{1:{name:"constant.other.enum.java"}},end:"(,)|(?=;|})",endCaptures:{1:{name:"punctuation.separator.delimiter.java"}},patterns:[{include:"#comments-javadoc"},{include:"#comments"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.bracket.round.java"}},end:"\\)",endCaptures:{0:{name:"punctuation.bracket.round.java"}},patterns:[{include:"#code"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.bracket.curly.java"}},end:"}",endCaptures:{0:{name:"punctuation.bracket.curly.java"}},patterns:[{include:"#class-body"}]}]}]},{include:"#class-body"}]}]},"function-call":{begin:"([A-Za-z_$][\\w$]*)\\s*(\\()",beginCaptures:{1:{name:"entity.name.function.java"},2:{name:"punctuation.definition.parameters.begin.bracket.round.java"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.java"}},name:"meta.function-call.java",patterns:[{include:"#code"}]},generics:{begin:"<",beginCaptures:{0:{name:"punctuation.bracket.angle.java"}},end:">",endCaptures:{0:{name:"punctuation.bracket.angle.java"}},patterns:[{match:"\\b(extends|super)\\b",name:"storage.modifier.$1.java"},{captures:{1:{name:"storage.type.java"}},match:"(?<!\\.)([a-zA-Z$_][a-zA-Z0-9$_]*)(?=\\s*<)"},{include:"#primitive-arrays"},{match:"[a-zA-Z$_][a-zA-Z0-9$_]*",name:"storage.type.generic.java"},{match:"\\?",name:"storage.type.generic.wildcard.java"},{match:"&",name:"punctuation.separator.types.java"},{match:",",name:"punctuation.separator.delimiter.java"},{match:"\\.",name:"punctuation.separator.period.java"},{include:"#parens"},{include:"#generics"},{include:"#comments"}]},keywords:{patterns:[{match:"\\bthrow\\b",name:"keyword.control.throw.java"},{match:"\\?|:",name:"keyword.control.ternary.java"},{match:"\\b(return|yield|break|case|continue|default|do|while|for|switch|if|else)\\b",name:"keyword.control.java"},{match:"\\b(instanceof)\\b",name:"keyword.operator.instanceof.java"},{match:"(<<|>>>?|~|\\^)",name:"keyword.operator.bitwise.java"},{match:"((&|\\^|\\||<<|>>>?)=)",name:"keyword.operator.assignment.bitwise.java"},{match:"(===?|!=|<=|>=|<>|<|>)",name:"keyword.operator.comparison.java"},{match:"([+*/%-]=)",name:"keyword.operator.assignment.arithmetic.java"},{match:"(=)",name:"keyword.operator.assignment.java"},{match:"(\\-\\-|\\+\\+)",name:"keyword.operator.increment-decrement.java"},{match:"(\\-|\\+|\\*|\\/|%)",name:"keyword.operator.arithmetic.java"},{match:"(!|&&|\\|\\|)",name:"keyword.operator.logical.java"},{match:"(\\||&)",name:"keyword.operator.bitwise.java"},{match:"\\b(const|goto)\\b",name:"keyword.reserved.java"}]},"lambda-expression":{patterns:[{match:"->",name:"storage.type.function.arrow.java"}]},"member-variables":{begin:"(?=private|protected|public|native|synchronized|abstract|threadsafe|transient|static|final)",end:"(?=\\=|;)",patterns:[{include:"#storage-modifiers"},{include:"#variables"},{include:"#primitive-arrays"},{include:"#object-types"}]},"method-call":{begin:"(\\.)\\s*([A-Za-z_$][\\w$]*)\\s*(\\()",beginCaptures:{1:{name:"punctuation.separator.period.java"},2:{name:"entity.name.function.java"},3:{name:"punctuation.definition.parameters.begin.bracket.round.java"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.java"}},name:"meta.method-call.java",patterns:[{include:"#code"}]},methods:{begin:"(?!new)(?=[\\w<].*\\s+)(?=([^=/]|/(?!/))+\\()",end:"(})|(?=;)",endCaptures:{1:{name:"punctuation.section.method.end.bracket.curly.java"}},name:"meta.method.java",patterns:[{include:"#storage-modifiers"},{begin:"(\\w+)\\s*(\\()",beginCaptures:{1:{name:"entity.name.function.java"},2:{name:"punctuation.definition.parameters.begin.bracket.round.java"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.java"}},name:"meta.method.identifier.java",patterns:[{include:"#parameters"},{include:"#parens"},{include:"#comments"}]},{include:"#generics"},{begin:"(?=\\w.*\\s+\\w+\\s*\\()",end:"(?=\\s+\\w+\\s*\\()",name:"meta.method.return-type.java",patterns:[{include:"#all-types"},{include:"#parens"},{include:"#comments"}]},{include:"#throws"},{begin:"{",beginCaptures:{0:{name:"punctuation.section.method.begin.bracket.curly.java"}},contentName:"meta.method.body.java",end:"(?=})",patterns:[{include:"#code"}]},{include:"#comments"}]},module:{begin:"((open)\\s)?(module)\\s+(\\w+)",beginCaptures:{1:{name:"storage.modifier.java"},3:{name:"storage.modifier.java"},4:{name:"entity.name.type.module.java"}},end:"}",endCaptures:{0:{name:"punctuation.section.module.end.bracket.curly.java"}},name:"meta.module.java",patterns:[{begin:"{",beginCaptures:{0:{name:"punctuation.section.module.begin.bracket.curly.java"}},contentName:"meta.module.body.java",end:"(?=})",patterns:[{include:"#comments"},{include:"#comments-javadoc"},{match:"\\b(requires|transitive|exports|opens|to|uses|provides|with)\\b",name:"keyword.module.java"}]}]},numbers:{patterns:[{match:`(?x)
\\b(?<!\\$)
0(x|X)
(
(?<!\\.)[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[Ll]?(?!\\.)
|
(
[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?\\.?
|
([0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?)?\\.[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?
)
[Pp][+-]?[0-9]([0-9_]*[0-9])?[FfDd]?
)
\\b(?!\\$)`,name:"constant.numeric.hex.java"},{match:"\\b(?<!\\$)0(b|B)[01]([01_]*[01])?[Ll]?\\b(?!\\$)",name:"constant.numeric.binary.java"},{match:"\\b(?<!\\$)0[0-7]([0-7_]*[0-7])?[Ll]?\\b(?!\\$)",name:"constant.numeric.octal.java"},{match:`(?x)
(?<!\\$)
(
\\b[0-9]([0-9_]*[0-9])?\\.\\B(?!\\.)
|
\\b[0-9]([0-9_]*[0-9])?\\.([Ee][+-]?[0-9]([0-9_]*[0-9])?)[FfDd]?\\b
|
\\b[0-9]([0-9_]*[0-9])?\\.([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]\\b
|
\\b[0-9]([0-9_]*[0-9])?\\.([0-9]([0-9_]*[0-9])?)([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]?\\b
|
(?<!\\.)\\B\\.[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]?\\b
|
\\b[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)[FfDd]?\\b
|
\\b[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]\\b
|
\\b(0|[1-9]([0-9_]*[0-9])?)(?!\\.)[Ll]?\\b
)
(?!\\$)`,name:"constant.numeric.decimal.java"}]},"object-types":{patterns:[{include:"#generics"},{begin:"\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*)([A-Z_]\\w*)\\s*(?=\\[)",beginCaptures:{1:{patterns:[{match:"[A-Za-z_]\\w*",name:"storage.type.java"},{match:"\\.",name:"punctuation.separator.period.java"}]},2:{name:"storage.type.object.array.java"}},end:"(?!\\s*\\[)",patterns:[{include:"#comments"},{include:"#parens"}]},{captures:{1:{patterns:[{match:"[A-Za-z_]\\w*",name:"storage.type.java"},{match:"\\.",name:"punctuation.separator.period.java"}]}},match:"\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*[A-Z_]\\w*)\\s*(?=<)"},{captures:{1:{patterns:[{match:"[A-Za-z_]\\w*",name:"storage.type.java"},{match:"\\.",name:"punctuation.separator.period.java"}]}},match:"\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*[A-Z_]\\w*)\\b((?=\\s*[A-Za-z$_\\n])|(?=\\s*\\.\\.\\.))"}]},"object-types-inherited":{patterns:[{include:"#generics"},{captures:{1:{name:"punctuation.separator.period.java"}},match:"\\b(?:[A-Z]\\w*\\s*(\\.)\\s*)*[A-Z]\\w*\\b",name:"entity.other.inherited-class.java"},{match:",",name:"punctuation.separator.delimiter.java"}]},objects:{match:"(?<![\\w$])[a-zA-Z_$][\\w$]*(?=\\s*\\.\\s*[\\w$]+)",name:"variable.other.object.java"},parameters:{patterns:[{match:"\\bfinal\\b",name:"storage.modifier.java"},{include:"#annotations"},{include:"#all-types"},{include:"#strings"},{match:"\\w+",name:"variable.parameter.java"},{match:",",name:"punctuation.separator.delimiter.java"},{match:"\\.\\.\\.",name:"punctuation.definition.parameters.varargs.java"}]},parens:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.bracket.round.java"}},end:"\\)",endCaptures:{0:{name:"punctuation.bracket.round.java"}},patterns:[{include:"#code"}]},{begin:"\\[",beginCaptures:{0:{name:"punctuation.bracket.square.java"}},end:"\\]",endCaptures:{0:{name:"punctuation.bracket.square.java"}},patterns:[{include:"#code"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.bracket.curly.java"}},end:"}",endCaptures:{0:{name:"punctuation.bracket.curly.java"}},patterns:[{include:"#code"}]}]},"primitive-arrays":{patterns:[{begin:"\\b(void|boolean|byte|char|short|int|float|long|double)\\b\\s*(?=\\[)",beginCaptures:{1:{name:"storage.type.primitive.array.java"}},end:"(?!\\s*\\[)",patterns:[{include:"#comments"},{include:"#parens"}]}]},"primitive-types":{match:"\\b(void|boolean|byte|char|short|int|float|long|double)\\b",name:"storage.type.primitive.java"},properties:{patterns:[{captures:{1:{name:"punctuation.separator.period.java"},2:{name:"keyword.control.new.java"}},match:"(\\.)\\s*(new)"},{captures:{1:{name:"punctuation.separator.period.java"},2:{name:"variable.other.object.property.java"}},match:"(\\.)\\s*([a-zA-Z_$][\\w$]*)(?=\\s*\\.\\s*[a-zA-Z_$][\\w$]*)"},{captures:{1:{name:"punctuation.separator.period.java"},2:{name:"variable.other.object.property.java"}},match:"(\\.)\\s*([a-zA-Z_$][\\w$]*)"},{captures:{1:{name:"punctuation.separator.period.java"},2:{name:"invalid.illegal.identifier.java"}},match:"(\\.)\\s*([0-9][\\w$]*)"}]},record:{begin:"(?=\\w?[\\w\\s]*\\b(?:record)\\s+[\\w$]+)",end:"}",endCaptures:{0:{name:"punctuation.section.class.end.bracket.curly.java"}},name:"meta.record.java",patterns:[{include:"#storage-modifiers"},{include:"#generics"},{include:"#comments"},{begin:"(record)\\s+([\\w$]+)(<[\\w$]+>)?(\\()",beginCaptures:{1:{name:"storage.modifier.java"},2:{name:"entity.name.type.record.java"},3:{patterns:[{include:"#generics"}]},4:{name:"punctuation.definition.parameters.begin.bracket.round.java"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.java"}},name:"meta.record.identifier.java",patterns:[{include:"#code"}]},{begin:"(implements)\\s",beginCaptures:{1:{name:"storage.modifier.implements.java"}},end:"(?=\\s*\\{)",name:"meta.definition.class.implemented.interfaces.java",patterns:[{include:"#object-types-inherited"},{include:"#comments"}]},{include:"#record-body"}]},"record-body":{begin:"{",beginCaptures:{0:{name:"punctuation.section.class.begin.bracket.curly.java"}},end:"(?=})",name:"meta.record.body.java",patterns:[{include:"#record-constructor"},{include:"#class-body"}]},"record-constructor":{begin:"(?!new)(?=[\\w<].*\\s+)(?=([^\\(=/]|/(?!/))+(?={))",end:"(})|(?=;)",endCaptures:{1:{name:"punctuation.section.method.end.bracket.curly.java"}},name:"meta.method.java",patterns:[{include:"#storage-modifiers"},{begin:"(\\w+)",beginCaptures:{1:{name:"entity.name.function.java"}},end:"(?=\\s*{)",name:"meta.method.identifier.java",patterns:[{include:"#comments"}]},{include:"#comments"},{begin:"{",beginCaptures:{0:{name:"punctuation.section.method.begin.bracket.curly.java"}},contentName:"meta.method.body.java",end:"(?=})",patterns:[{include:"#code"}]}]},"static-initializer":{patterns:[{include:"#anonymous-block-and-instance-initializer"},{match:"static",name:"storage.modifier.java"}]},"storage-modifiers":{match:"\\b(public|private|protected|static|final|native|synchronized|abstract|threadsafe|transient|volatile|default|strictfp|sealed|non-sealed)\\b",name:"storage.modifier.java"},strings:{patterns:[{begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.java"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.java"}},name:"string.quoted.triple.java",patterns:[{match:'(\\\\""")(?!")|(\\\\.)',name:"constant.character.escape.java"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.java"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.java"}},name:"string.quoted.double.java",patterns:[{match:"\\\\.",name:"constant.character.escape.java"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.java"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.java"}},name:"string.quoted.single.java",patterns:[{match:"\\\\.",name:"constant.character.escape.java"}]}]},throws:{begin:"throws",beginCaptures:{0:{name:"storage.modifier.java"}},end:"(?={|;)",name:"meta.throwables.java",patterns:[{match:",",name:"punctuation.separator.delimiter.java"},{match:"[a-zA-Z$_][\\.a-zA-Z0-9$_]*",name:"storage.type.java"},{include:"#comments"}]},"try-catch-finally":{patterns:[{begin:"\\btry\\b",beginCaptures:{0:{name:"keyword.control.try.java"}},end:"}",endCaptures:{0:{name:"punctuation.section.try.end.bracket.curly.java"}},name:"meta.try.java",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.try.resources.begin.bracket.round.java"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.try.resources.end.bracket.round.java"}},name:"meta.try.resources.java",patterns:[{include:"#code"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.try.begin.bracket.curly.java"}},contentName:"meta.try.body.java",end:"(?=})",patterns:[{include:"#code"}]}]},{begin:"\\b(catch)\\b",beginCaptures:{1:{name:"keyword.control.catch.java"}},end:"}",endCaptures:{0:{name:"punctuation.section.catch.end.bracket.curly.java"}},name:"meta.catch.java",patterns:[{include:"#comments"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.bracket.round.java"}},contentName:"meta.catch.parameters.java",end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.java"}},patterns:[{include:"#comments"},{include:"#storage-modifiers"},{begin:"[a-zA-Z$_][\\.a-zA-Z0-9$_]*",beginCaptures:{0:{name:"storage.type.java"}},end:"(\\|)|(?=\\))",endCaptures:{1:{name:"punctuation.catch.separator.java"}},patterns:[{include:"#comments"},{captures:{0:{name:"variable.parameter.java"}},match:"\\w+"}]}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.catch.begin.bracket.curly.java"}},contentName:"meta.catch.body.java",end:"(?=})",patterns:[{include:"#code"}]}]},{begin:"\\bfinally\\b",beginCaptures:{0:{name:"keyword.control.finally.java"}},end:"}",endCaptures:{0:{name:"punctuation.section.finally.end.bracket.curly.java"}},name:"meta.finally.java",patterns:[{begin:"{",beginCaptures:{0:{name:"punctuation.section.finally.begin.bracket.curly.java"}},contentName:"meta.finally.body.java",end:"(?=})",patterns:[{include:"#code"}]}]}]},variables:{begin:`(?x)
(?=
\\b
(
(void|boolean|byte|char|short|int|float|long|double)
|
(?>(\\w+\\.)*[A-Z_]+\\w*)
)
\\b
\\s*
(
<[\\w<>,\\.?\\s\\[\\]]*>
)?
\\s*
(
(\\[\\])*
)?
\\s+
[A-Za-z_$][\\w$]*
([\\w\\[\\],$][\\w\\[\\],\\s]*)?
\\s*(=|:|;)
)`,end:"(?=\\=|:|;)",name:"meta.definition.variable.java",patterns:[{captures:{1:{name:"variable.other.definition.java"}},match:"([A-Za-z$_][\\w$]*)(?=\\s*(\\[\\])*\\s*(;|:|=|,))"},{include:"#all-types"},{include:"#code"}]},"variables-local":{begin:"(?=\\b(var)\\b\\s+[A-Za-z_$][\\w$]*\\s*(=|:|;))",end:"(?=\\=|:|;)",name:"meta.definition.variable.local.java",patterns:[{match:"\\bvar\\b",name:"storage.type.local.java"},{captures:{1:{name:"variable.other.definition.java"}},match:"([A-Za-z$_][\\w$]*)(?=\\s*(\\[\\])*\\s*(=|:|;))"},{include:"#code"}]}},scopeName:"source.java"});var o=[s];const c=Object.freeze({displayName:"XML",name:"xml",patterns:[{begin:"(<\\?)\\s*([-_a-zA-Z0-9]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"}},end:"(\\?>)",name:"meta.tag.preprocessor.xml",patterns:[{match:" ([a-zA-Z-]+)",name:"entity.other.attribute-name.xml"},{include:"#doublequotedString"},{include:"#singlequotedString"}]},{begin:"(<!)(DOCTYPE)\\s+([:a-zA-Z_][:a-zA-Z0-9_.-]*)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.doctype.xml"},3:{name:"variable.language.documentroot.xml"}},end:"\\s*(>)",name:"meta.tag.sgml.doctype.xml",patterns:[{include:"#internalSubset"}]},{include:"#comments"},{begin:"(<)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(?=(\\s[^>]*)?></\\2>)",beginCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"},3:{name:"entity.name.tag.namespace.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(>)(</)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(>)",endCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"punctuation.definition.tag.xml"},3:{name:"entity.name.tag.xml"},4:{name:"entity.name.tag.namespace.xml"},5:{name:"punctuation.separator.namespace.xml"},6:{name:"entity.name.tag.localname.xml"},7:{name:"punctuation.definition.tag.xml"}},name:"meta.tag.no-content.xml",patterns:[{include:"#tagStuff"}]},{begin:"(</?)(?:([-\\w\\.]+)((:)))?([-\\w\\.:]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.namespace.xml"},3:{name:"entity.name.tag.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(/?>)",name:"meta.tag.xml",patterns:[{include:"#tagStuff"}]},{include:"#entity"},{include:"#bare-ampersand"},{begin:"<%@",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java-props.embedded.xml",patterns:[{match:"page|include|taglib",name:"keyword.other.page-props.xml"}]},{begin:"<%[!=]?(?!--)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"(?!--)%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java.embedded.xml",patterns:[{include:"source.java"}]},{begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"]]>",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.unquoted.cdata.xml"}],repository:{EntityDecl:{begin:"(<!)(ENTITY)\\s+(%\\s+)?([:a-zA-Z_][:a-zA-Z0-9_.-]*)(\\s+(?:SYSTEM|PUBLIC)\\s+)?",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.entity.xml"},3:{name:"punctuation.definition.entity.xml"},4:{name:"variable.language.entity.xml"},5:{name:"keyword.other.entitytype.xml"}},end:"(>)",patterns:[{include:"#doublequotedString"},{include:"#singlequotedString"}]},"bare-ampersand":{match:"&",name:"invalid.illegal.bad-ampersand.xml"},comments:{patterns:[{begin:"<%--",captures:{0:{name:"punctuation.definition.comment.xml"},end:"--%>",name:"comment.block.xml"}},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.xml"}},end:"-->",name:"comment.block.xml",patterns:[{begin:"--(?!>)",captures:{0:{name:"invalid.illegal.bad-comments-or-CDATA.xml"}}}]}]},doublequotedString:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.double.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},entity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(&)([:a-zA-Z_][:a-zA-Z0-9_.-]*|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.xml"},internalSubset:{begin:"(\\[)",captures:{1:{name:"punctuation.definition.constant.xml"}},end:"(\\])",name:"meta.internalsubset.xml",patterns:[{include:"#EntityDecl"},{include:"#parameterEntity"},{include:"#comments"}]},parameterEntity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(%)([:a-zA-Z_][:a-zA-Z0-9_.-]*)(;)",name:"constant.character.parameter-entity.xml"},singlequotedString:{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.single.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},tagStuff:{patterns:[{captures:{1:{name:"entity.other.attribute-name.namespace.xml"},2:{name:"entity.other.attribute-name.xml"},3:{name:"punctuation.separator.namespace.xml"},4:{name:"entity.other.attribute-name.localname.xml"}},match:"(?:^|\\s+)(?:([-\\w.]+)((:)))?([-\\w.:]+)\\s*="},{include:"#doublequotedString"},{include:"#singlequotedString"}]}},scopeName:"text.xml",embeddedLangs:["java"]});var p=[...o,c];const l=Object.freeze({displayName:"SQL",name:"sql",patterns:[{match:"((?<!@)@)\\b(\\w+)\\b",name:"text.variable"},{match:"(\\[)[^\\]]*(\\])",name:"text.bracketed"},{include:"#comments"},{captures:{1:{name:"keyword.other.create.sql"},2:{name:"keyword.other.sql"},5:{name:"entity.name.function.sql"}},match:"(?i:^\\s*(create(?:\\s+or\\s+replace)?)\\s+(aggregate|conversion|database|domain|function|group|(unique\\s+)?index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)(['\"`]?)(\\w+)\\4",name:"meta.create.sql"},{captures:{1:{name:"keyword.other.create.sql"},2:{name:"keyword.other.sql"}},match:"(?i:^\\s*(drop)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view))",name:"meta.drop.sql"},{captures:{1:{name:"keyword.other.create.sql"},2:{name:"keyword.other.table.sql"},3:{name:"entity.name.function.sql"},4:{name:"keyword.other.cascade.sql"}},match:"(?i:\\s*(drop)\\s+(table)\\s+(\\w+)(\\s+cascade)?\\b)",name:"meta.drop.sql"},{captures:{1:{name:"keyword.other.create.sql"},2:{name:"keyword.other.table.sql"}},match:"(?i:^\\s*(alter)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|proc(edure)?|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)",name:"meta.alter.sql"},{captures:{1:{name:"storage.type.sql"},2:{name:"storage.type.sql"},3:{name:"constant.numeric.sql"},4:{name:"storage.type.sql"},5:{name:"constant.numeric.sql"},6:{name:"storage.type.sql"},7:{name:"constant.numeric.sql"},8:{name:"constant.numeric.sql"},9:{name:"storage.type.sql"},10:{name:"constant.numeric.sql"},11:{name:"storage.type.sql"},12:{name:"storage.type.sql"},13:{name:"storage.type.sql"},14:{name:"constant.numeric.sql"},15:{name:"storage.type.sql"}},match:`(?xi)


\\b(bigint|bigserial|bit|boolean|box|bytea|cidr|circle|date|double\\sprecision|inet|int|integer|line|lseg|macaddr|money|oid|path|point|polygon|real|serial|smallint|sysdate|text)\\b


|\\b(bit\\svarying|character\\s(?:varying)?|tinyint|var\\schar|float|interval)\\((\\d+)\\)


|\\b(char|number|varchar\\d?)\\b(?:\\((\\d+)\\))?


|\\b(numeric|decimal)\\b(?:\\((\\d+),(\\d+)\\))?


|\\b(times?)\\b(?:\\((\\d+)\\))?(\\swith(?:out)?\\stime\\szone\\b)?


|\\b(timestamp)(?:(s|tz))?\\b(?:\\((\\d+)\\))?(\\s(with|without)\\stime\\szone\\b)?

`},{match:"(?i:\\b((?:primary|foreign)\\s+key|references|on\\sdelete(\\s+cascade)?|nocheck|check|constraint|collate|default)\\b)",name:"storage.modifier.sql"},{match:"\\b\\d+\\b",name:"constant.numeric.sql"},{match:"(?i:\\b(select(\\s+(all|distinct))?|insert\\s+(ignore\\s+)?into|update|delete|from|set|where|group\\s+by|or|like|and|union(\\s+all)?|having|order\\s+by|limit|cross\\s+join|join|straight_join|(inner|(left|right|full)(\\s+outer)?)\\s+join|natural(\\s+(inner|(left|right|full)(\\s+outer)?))?\\s+join)\\b)",name:"keyword.other.DML.sql"},{match:"(?i:\\b(on|off|((is\\s+)?not\\s+)?null)\\b)",name:"keyword.other.DDL.create.II.sql"},{match:"(?i:\\bvalues\\b)",name:"keyword.other.DML.II.sql"},{match:"(?i:\\b(begin(\\s+work)?|start\\s+transaction|commit(\\s+work)?|rollback(\\s+work)?)\\b)",name:"keyword.other.LUW.sql"},{match:"(?i:\\b(grant(\\swith\\sgrant\\soption)?|revoke)\\b)",name:"keyword.other.authorization.sql"},{match:"(?i:\\bin\\b)",name:"keyword.other.data-integrity.sql"},{match:"(?i:^\\s*(comment\\s+on\\s+(table|column|aggregate|constraint|database|domain|function|index|operator|rule|schema|sequence|trigger|type|view))\\s+.*?\\s+(is)\\s+)",name:"keyword.other.object-comments.sql"},{match:"(?i)\\bAS\\b",name:"keyword.other.alias.sql"},{match:"(?i)\\b(DESC|ASC)\\b",name:"keyword.other.order.sql"},{match:"\\*",name:"keyword.operator.star.sql"},{match:"[!<>]?=|<>|<|>",name:"keyword.operator.comparison.sql"},{match:"-|\\+|/",name:"keyword.operator.math.sql"},{match:"\\|\\|",name:"keyword.operator.concatenator.sql"},{captures:{1:{name:"support.function.aggregate.sql"}},match:"(?i)\\b(approx_count_distinct|approx_percentile_cont|approx_percentile_disc|avg|checksum_agg|count|count_big|group|grouping|grouping_id|max|min|sum|stdev|stdevp|var|varp)\\b\\s*\\("},{captures:{1:{name:"support.function.analytic.sql"}},match:"(?i)\\b(cume_dist|first_value|lag|last_value|lead|percent_rank|percentile_cont|percentile_disc)\\b\\s*\\("},{captures:{1:{name:"support.function.bitmanipulation.sql"}},match:"(?i)\\b(bit_count|get_bit|left_shift|right_shift|set_bit)\\b\\s*\\("},{captures:{1:{name:"support.function.conversion.sql"}},match:"(?i)\\b(cast|convert|parse|try_cast|try_convert|try_parse)\\b\\s*\\("},{captures:{1:{name:"support.function.collation.sql"}},match:"(?i)\\b(collationproperty|tertiary_weights)\\b\\s*\\("},{captures:{1:{name:"support.function.cryptographic.sql"}},match:"(?i)\\b(asymkey_id|asymkeyproperty|certproperty|cert_id|crypt_gen_random|decryptbyasymkey|decryptbycert|decryptbykey|decryptbykeyautoasymkey|decryptbykeyautocert|decryptbypassphrase|encryptbyasymkey|encryptbycert|encryptbykey|encryptbypassphrase|hashbytes|is_objectsigned|key_guid|key_id|key_name|signbyasymkey|signbycert|symkeyproperty|verifysignedbycert|verifysignedbyasymkey)\\b\\s*\\("},{captures:{1:{name:"support.function.cursor.sql"}},match:"(?i)\\b(cursor_status)\\b\\s*\\("},{captures:{1:{name:"support.function.datetime.sql"}},match:"(?i)\\b(sysdatetime|sysdatetimeoffset|sysutcdatetime|current_time(stamp)?|getdate|getutcdate|datename|datepart|day|month|year|datefromparts|datetime2fromparts|datetimefromparts|datetimeoffsetfromparts|smalldatetimefromparts|timefromparts|datediff|dateadd|datetrunc|eomonth|switchoffset|todatetimeoffset|isdate|date_bucket)\\b\\s*\\("},{captures:{1:{name:"support.function.datatype.sql"}},match:"(?i)\\b(datalength|ident_current|ident_incr|ident_seed|identity|sql_variant_property)\\b\\s*\\("},{captures:{1:{name:"support.function.expression.sql"}},match:"(?i)\\b(coalesce|nullif)\\b\\s*\\("},{captures:{1:{name:"support.function.globalvar.sql"}},match:"(?<!@)@@(?i)\\b(cursor_rows|connections|cpu_busy|datefirst|dbts|error|fetch_status|identity|idle|io_busy|langid|language|lock_timeout|max_connections|max_precision|nestlevel|options|packet_errors|pack_received|pack_sent|procid|remserver|rowcount|servername|servicename|spid|textsize|timeticks|total_errors|total_read|total_write|trancount|version)\\b\\s*\\("},{captures:{1:{name:"support.function.json.sql"}},match:"(?i)\\b(json|isjson|json_object|json_array|json_value|json_query|json_modify|json_path_exists)\\b\\s*\\("},{captures:{1:{name:"support.function.logical.sql"}},match:"(?i)\\b(choose|iif|greatest|least)\\b\\s*\\("},{captures:{1:{name:"support.function.mathematical.sql"}},match:"(?i)\\b(abs|acos|asin|atan|atn2|ceiling|cos|cot|degrees|exp|floor|log|log10|pi|power|radians|rand|round|sign|sin|sqrt|square|tan)\\b\\s*\\("},{captures:{1:{name:"support.function.metadata.sql"}},match:"(?i)\\b(app_name|applock_mode|applock_test|assemblyproperty|col_length|col_name|columnproperty|database_principal_id|databasepropertyex|db_id|db_name|file_id|file_idex|file_name|filegroup_id|filegroup_name|filegroupproperty|fileproperty|fulltextcatalogproperty|fulltextserviceproperty|index_col|indexkey_property|indexproperty|object_definition|object_id|object_name|object_schema_name|objectproperty|objectpropertyex|original_db_name|parsename|schema_id|schema_name|scope_identity|serverproperty|stats_date|type_id|type_name|typeproperty)\\b\\s*\\("},{captures:{1:{name:"support.function.ranking.sql"}},match:"(?i)\\b(rank|dense_rank|ntile|row_number)\\b\\s*\\("},{captures:{1:{name:"support.function.rowset.sql"}},match:"(?i)\\b(generate_series|opendatasource|openjson|openrowset|openquery|openxml|predict|string_split)\\b\\s*\\("},{captures:{1:{name:"support.function.security.sql"}},match:"(?i)\\b(certencoded|certprivatekey|current_user|database_principal_id|has_perms_by_name|is_member|is_rolemember|is_srvrolemember|original_login|permissions|pwdcompare|pwdencrypt|schema_id|schema_name|session_user|suser_id|suser_sid|suser_sname|system_user|suser_name|user_id|user_name)\\b\\s*\\("},{captures:{1:{name:"support.function.string.sql"}},match:"(?i)\\b(ascii|char|charindex|concat|difference|format|left|len|lower|ltrim|nchar|nodes|patindex|quotename|replace|replicate|reverse|right|rtrim|soundex|space|str|string_agg|string_escape|string_split|stuff|substring|translate|trim|unicode|upper)\\b\\s*\\("},{captures:{1:{name:"support.function.system.sql"}},match:"(?i)\\b(binary_checksum|checksum|compress|connectionproperty|context_info|current_request_id|current_transaction_id|decompress|error_line|error_message|error_number|error_procedure|error_severity|error_state|formatmessage|get_filestream_transaction_context|getansinull|host_id|host_name|isnull|isnumeric|min_active_rowversion|newid|newsequentialid|rowcount_big|session_context|session_id|xact_state)\\b\\s*\\("},{captures:{1:{name:"support.function.textimage.sql"}},match:"(?i)\\b(patindex|textptr|textvalid)\\b\\s*\\("},{captures:{1:{name:"constant.other.database-name.sql"},2:{name:"constant.other.table-name.sql"}},match:"(\\w+?)\\.(\\w+)"},{include:"#strings"},{include:"#regexps"},{match:"\\b(?i)(abort|abort_after_wait|absent|absolute|accent_sensitivity|acceptable_cursopt|acp|action|activation|add|address|admin|aes_128|aes_192|aes_256|affinity|after|aggregate|algorithm|all_constraints|all_errormsgs|all_indexes|all_levels|all_results|allow_connections|allow_dup_row|allow_encrypted_value_modifications|allow_page_locks|allow_row_locks|allow_snapshot_isolation|alter|altercolumn|always|anonymous|ansi_defaults|ansi_null_default|ansi_null_dflt_off|ansi_null_dflt_on|ansi_nulls|ansi_padding|ansi_warnings|appdomain|append|application|apply|arithabort|arithignore|array|assembly|asymmetric|asynchronous_commit|at|atan2|atomic|attach|attach_force_rebuild_log|attach_rebuild_log|audit|auth_realm|authentication|auto|auto_cleanup|auto_close|auto_create_statistics|auto_drop|auto_shrink|auto_update_statistics|auto_update_statistics_async|automated_backup_preference|automatic|autopilot|availability|availability_mode|backup|backup_priority|base64|basic|batches|batchsize|before|between|bigint|binary|binding|bit|block|blockers|blocksize|bmk|both|break|broker|broker_instance|bucket_count|buffer|buffercount|bulk_logged|by|call|caller|card|case|catalog|catch|cert|certificate|change_retention|change_tracking|change_tracking_context|changes|char|character|character_set|check_expiration|check_policy|checkconstraints|checkindex|checkpoint|checksum|cleanup_policy|clear|clear_port|close|clustered|codepage|collection|column_encryption_key|column_master_key|columnstore|columnstore_archive|colv_80_to_100|colv_100_to_80|commit_differential_base|committed|compatibility_level|compress_all_row_groups|compression|compression_delay|concat_null_yields_null|concatenate|configuration|connect|connection|containment|continue|continue_after_error|contract|contract_name|control|conversation|conversation_group_id|conversation_handle|copy|copy_only|count_rows|counter|create(\\\\s+or\\\\s+alter)?|credential|cross|cryptographic|cryptographic_provider|cube|cursor|cursor_close_on_commit|cursor_default|data|data_compression|data_flush_interval_seconds|data_mirroring|data_purity|data_source|database|database_name|database_snapshot|datafiletype|date_correlation_optimization|date|datefirst|dateformat|date_format|datetime|datetime2|datetimeoffset|day(s)?|db_chaining|dbid|dbidexec|dbo_only|deadlock_priority|deallocate|dec|decimal|declare|decrypt|decrypt_a|decryption|default_database|default_fulltext_language|default_language|default_logon_domain|default_schema|definition|delay|delayed_durability|delimitedtext|density_vector|dependent|des|description|desired_state|desx|differential|digest|disable|disable_broker|disable_def_cnst_chk|disabled|disk|distinct|distributed|distribution|drop|drop_existing|dts_buffers|dump|durability|dynamic|edition|elements|else|emergency|empty|enable|enable_broker|enabled|encoding|encrypted|encrypted_value|encryption|encryption_type|end|endpoint|endpoint_url|enhancedintegrity|entry|error_broker_conversations|errorfile|estimateonly|event|except|exec|executable|execute|exists|expand|expiredate|expiry_date|explicit|external|external_access|failover|failover_mode|failure_condition_level|fast|fast_forward|fastfirstrow|federated_service_account|fetch|field_terminator|fieldterminator|file|filelistonly|filegroup|filegrowth|filename|filestream|filestream_log|filestream_on|filetable|file_format|filter|first_row|fips_flagger|fire_triggers|first|firstrow|float|flush_interval_seconds|fmtonly|following|for|force|force_failover_allow_data_loss|force_service_allow_data_loss|forced|forceplan|formatfile|format_options|format_type|formsof|forward_only|free_cursors|free_exec_context|fullscan|fulltext|fulltextall|fulltextkey|function|generated|get|geography|geometry|global|go|goto|governor|guid|hadoop|hardening|hash|hashed|header_limit|headeronly|health_check_timeout|hidden|hierarchyid|histogram|histogram_steps|hits_cursors|hits_exec_context|hour(s)?|http|identity|identity_value|if|ifnull|ignore|ignore_constraints|ignore_dup_key|ignore_dup_row|ignore_triggers|image|immediate|implicit_transactions|include|include_null_values|incremental|index|inflectional|init|initiator|insensitive|insert|instead|int|integer|integrated|intersect|intermediate|interval_length_minutes|into|inuse_cursors|inuse_exec_context|io|is|isabout|iso_week|isolation|job_tracker_location|json|keep|keep_nulls|keep_replication|keepdefaults|keepfixed|keepidentity|keepnulls|kerberos|key|key_path|key_source|key_store_provider_name|keyset|kill|kilobytes_per_batch|labelonly|langid|language|last|lastrow|leading|legacy_cardinality_estimation|length|level|lifetime|lineage_80_to_100|lineage_100_to_80|listener_ip|listener_port|load|loadhistory|lob_compaction|local|local_service_name|locate|location|lock_escalation|lock_timeout|lockres|log|login|login_type|loop|manual|mark_in_use_for_removal|masked|master|match|matched|max_queue_readers|max_duration|max_outstanding_io_per_volume|maxdop|maxerrors|maxlength|maxtransfersize|max_plans_per_query|max_storage_size_mb|mediadescription|medianame|mediapassword|memogroup|memory_optimized|merge|message|message_forward_size|message_forwarding|microsecond|millisecond|minute(s)?|mirror_address|misses_cursors|misses_exec_context|mixed|modify|money|month|move|multi_user|must_change|name|namespace|nanosecond|native|native_compilation|nchar|ncharacter|nested_triggers|never|new_account|new_broker|newname|next|no|no_browsetable|no_checksum|no_compression|no_infomsgs|no_triggers|no_truncate|nocount|noexec|noexpand|noformat|noinit|nolock|nonatomic|nonclustered|nondurable|none|norecompute|norecovery|noreset|norewind|noskip|not|notification|nounload|now|nowait|ntext|ntlm|nulls|numeric|numeric_roundabort|nvarchar|object|objid|oem|offline|old_account|online|operation_mode|open|openjson|optimistic|option|orc|out|outer|output|over|override|owner|ownership|pad_index|page|page_checksum|page_verify|pagecount|paglock|param|parameter_sniffing|parameter_type_expansion|parameterization|parquet|parseonly|partial|partition|partner|password|path|pause|percentage|permission_set|persisted|period|physical_only|plan_forcing_mode|policy|pool|population|ports|preceding|precision|predicate|presume_abort|primary|primary_role|print|prior|priority |priority_level|private|proc(edure)?|procedure_name|profile|provider|quarter|query_capture_mode|query_governor_cost_limit|query_optimizer_hotfixes|query_store|queue|quoted_identifier|raiserror|range|raw|rcfile|rc2|rc4|rc4_128|rdbms|read_committed_snapshot|read|read_only|read_write|readcommitted|readcommittedlock|readonly|readpast|readuncommitted|readwrite|real|rebuild|receive|recmodel_70backcomp|recompile|reconfigure|recovery|recursive|recursive_triggers|redo_queue|reject_sample_value|reject_type|reject_value|relative|remote|remote_data_archive|remote_proc_transactions|remote_service_name|remove|removed_cursors|removed_exec_context|reorganize|repeat|repeatable|repeatableread|replace|replica|replicated|replnick_100_to_80|replnickarray_80_to_100|replnickarray_100_to_80|required|required_cursopt|resample|reset|resource|resource_manager_location|respect|restart|restore|restricted_user|resume|retaindays|retention|return|revert|rewind|rewindonly|returns|robust|role|rollup|root|round_robin|route|row|rowdump|rowguidcol|rowlock|row_terminator|rows|rows_per_batch|rowsets_only|rowterminator|rowversion|rsa_1024|rsa_2048|rsa_3072|rsa_4096|rsa_512|safe|safety|sample|save|scalar|schema|schemabinding|scoped|scroll|scroll_locks|sddl|second|secexpr|seconds|secondary|secondary_only|secondary_role|secret|security|securityaudit|selective|self|send|sent|sequence|serde_method|serializable|server|service|service_broker|service_name|service_objective|session_timeout|session|sessions|seterror|setopts|sets|shard_map_manager|shard_map_name|sharded|shared_memory|shortest_path|show_statistics|showplan_all|showplan_text|showplan_xml|showplan_xml_with_recompile|shrinkdb|shutdown|sid|signature|simple|single_blob|single_clob|single_nclob|single_user|singleton|site|size|size_based_cleanup_mode|skip|smalldatetime|smallint|smallmoney|snapshot|snapshot_import|snapshotrestorephase|soap|softnuma|sort_in_tempdb|sorted_data|sorted_data_reorg|spatial|sql|sql_bigint|sql_binary|sql_bit|sql_char|sql_date|sql_decimal|sql_double|sql_float|sql_guid|sql_handle|sql_longvarbinary|sql_longvarchar|sql_numeric|sql_real|sql_smallint|sql_time|sql_timestamp|sql_tinyint|sql_tsi_day|sql_tsi_frac_second|sql_tsi_hour|sql_tsi_minute|sql_tsi_month|sql_tsi_quarter|sql_tsi_second|sql_tsi_week|sql_tsi_year|sql_type_date|sql_type_time|sql_type_timestamp|sql_varbinary|sql_varchar|sql_variant|sql_wchar|sql_wlongvarchar|ssl|ssl_port|standard|standby|start|start_date|started|stat_header|state|statement|static|statistics|statistics_incremental|statistics_norecompute|statistics_only|statman|stats|stats_stream|status|stop|stop_on_error|stopat|stopatmark|stopbeforemark|stoplist|stopped|string_delimiter|subject|supplemental_logging|supported|suspend|symmetric|synchronous_commit|synonym|sysname|system|system_time|system_versioning|table|tableresults|tablock|tablockx|take|tape|target|target_index|target_partition|target_recovery_time|tcp|temporal_history_retention|text|textimage_on|then|thesaurus|throw|time|timeout|timestamp|tinyint|to|top|torn_page_detection|track_columns_updated|trailing|tran|transaction|transfer|transform_noise_words|triple_des|triple_des_3key|truncate|trustworthy|try|tsql|two_digit_year_cutoff|type|type_desc|type_warning|tzoffset|uid|unbounded|uncommitted|unique|uniqueidentifier|unlimited|unload|unlock|unsafe|updlock|url|use|useplan|useroptions|use_type_default|using|utcdatetime|valid_xml|validation|value|values|varbinary|varchar|verbose|verifyonly|version|view_metadata|virtual_device|visiblity|wait_at_low_priority|waitfor|webmethod|week|weekday|weight|well_formed_xml|when|while|widechar|widechar_ansi|widenative|window|windows|with|within|within group|witness|without|without_array_wrapper|workload|wsdl|xact_abort|xlock|xml|xmlschema|xquery|xsinil|year|zone)\\b",name:"keyword.other.sql"},{captures:{1:{name:"punctuation.section.scope.begin.sql"},2:{name:"punctuation.section.scope.end.sql"}},comment:"Allow for special ↩ behavior",match:"(\\()(\\))",name:"meta.block.sql"}],repository:{"comment-block":{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.sql"}},end:"\\*/",name:"comment.block",patterns:[{include:"#comment-block"}]},comments:{patterns:[{begin:"(^[ \\t]+)?(?=--)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.sql"}},end:"(?!\\G)",patterns:[{begin:"--",beginCaptures:{0:{name:"punctuation.definition.comment.sql"}},end:"\\n",name:"comment.line.double-dash.sql"}]},{begin:"(^[ \\t]+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.sql"}},end:"(?!\\G)",patterns:[]},{include:"#comment-block"}]},regexps:{patterns:[{begin:"/(?=\\S.*/)",beginCaptures:{0:{name:"punctuation.definition.string.begin.sql"}},end:"/",endCaptures:{0:{name:"punctuation.definition.string.end.sql"}},name:"string.regexp.sql",patterns:[{include:"#string_interpolation"},{match:"\\\\/",name:"constant.character.escape.slash.sql"}]},{begin:"%r\\{",beginCaptures:{0:{name:"punctuation.definition.string.begin.sql"}},comment:"We should probably handle nested bracket pairs!?! -- Allan",end:"\\}",endCaptures:{0:{name:"punctuation.definition.string.end.sql"}},name:"string.regexp.modr.sql",patterns:[{include:"#string_interpolation"}]}]},string_escape:{match:"\\\\.",name:"constant.character.escape.sql"},string_interpolation:{captures:{1:{name:"punctuation.definition.string.begin.sql"},3:{name:"punctuation.definition.string.end.sql"}},match:"(#\\{)([^\\}]*)(\\})",name:"string.interpolated.sql"},strings:{patterns:[{captures:{2:{name:"punctuation.definition.string.begin.sql"},3:{name:"punctuation.definition.string.end.sql"}},comment:"this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",match:"(N)?(')[^']*(')",name:"string.quoted.single.sql"},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.sql"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.sql"}},name:"string.quoted.single.sql",patterns:[{include:"#string_escape"}]},{captures:{1:{name:"punctuation.definition.string.begin.sql"},2:{name:"punctuation.definition.string.end.sql"}},comment:"this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",match:"(`)[^`\\\\]*(`)",name:"string.quoted.other.backtick.sql"},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.sql"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.sql"}},name:"string.quoted.other.backtick.sql",patterns:[{include:"#string_escape"}]},{captures:{1:{name:"punctuation.definition.string.begin.sql"},2:{name:"punctuation.definition.string.end.sql"}},comment:"this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",match:'(")[^"#]*(")',name:"string.quoted.double.sql"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.sql"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.sql"}},name:"string.quoted.double.sql",patterns:[{include:"#string_interpolation"}]},{begin:"%\\{",beginCaptures:{0:{name:"punctuation.definition.string.begin.sql"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.string.end.sql"}},name:"string.other.quoted.brackets.sql",patterns:[{include:"#string_interpolation"}]}]}},scopeName:"source.sql"});var m=[l];const u=Object.freeze({displayName:"JSON",name:"json",patterns:[{include:"#value"}],repository:{array:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.json"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.json"}},name:"meta.structure.array.json",patterns:[{include:"#value"},{match:",",name:"punctuation.separator.array.json"},{match:"[^\\s\\]]",name:"invalid.illegal.expected-array-separator.json"}]},comments:{patterns:[{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.documentation.json"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.json"},{captures:{1:{name:"punctuation.definition.comment.json"}},match:"(//).*$\\n?",name:"comment.line.double-slash.js"}]},constant:{match:"\\b(?:true|false|null)\\b",name:"constant.language.json"},number:{match:`(?x)
-?
(?:
0
|
[1-9]
\\d*
)
(?:
(?:
\\.
\\d+
)?
(?:
[eE]
[+-]?
\\d+
)?
)?`,name:"constant.numeric.json"},object:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dictionary.begin.json"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dictionary.end.json"}},name:"meta.structure.dictionary.json",patterns:[{comment:"the JSON object key",include:"#objectkey"},{include:"#comments"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.dictionary.key-value.json"}},end:"(,)|(?=\\})",endCaptures:{1:{name:"punctuation.separator.dictionary.pair.json"}},name:"meta.structure.dictionary.value.json",patterns:[{comment:"the JSON object value",include:"#value"},{match:"[^\\s,]",name:"invalid.illegal.expected-dictionary-separator.json"}]},{match:"[^\\s\\}]",name:"invalid.illegal.expected-dictionary-separator.json"}]},objectkey:{begin:'"',beginCaptures:{0:{name:"punctuation.support.type.property-name.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.support.type.property-name.end.json"}},name:"string.json support.type.property-name.json",patterns:[{include:"#stringcontent"}]},string:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.json"}},name:"string.quoted.double.json",patterns:[{include:"#stringcontent"}]},stringcontent:{patterns:[{match:`(?x)
\\\\
(?:
["\\\\/bfnrt]
|
u
[0-9a-fA-F]{4})`,name:"constant.character.escape.json"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json"}]},value:{patterns:[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"}]}},scopeName:"source.json"});var d=[u];const b=Object.freeze({displayName:"Blade",fileTypes:["blade.php"],foldingStartMarker:"(/\\*|\\{\\s*$|<<<HTML)",foldingStopMarker:"(\\*/|^\\s*\\}|^HTML;)",injections:{"text.html.php.blade - (meta.embedded | meta.tag | comment.block.blade), L:(text.html.php.blade meta.tag - (comment.block.blade | meta.embedded.block.blade)), L:(source.js.embedded.html - (comment.block.blade | meta.embedded.block.blade))":{patterns:[{include:"#blade"},{begin:"(^\\s*)(?=<\\?(?![^?]*\\?>))",beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.php"}},end:"(?!\\G)(\\s*$\\n)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.php"}},patterns:[{begin:"<\\?(?i:php|=)?",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"}},contentName:"source.php",end:"(\\?)>",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"source.php"}},name:"meta.embedded.block.php",patterns:[{include:"#language"}]}]},{begin:"<\\?(?i:php|=)?(?![^?]*\\?>)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"}},contentName:"source.php",end:"(\\?)>",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"source.php"}},name:"meta.embedded.block.php",patterns:[{include:"#language"}]},{begin:"<\\?(?i:php|=)?",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"}},end:">",endCaptures:{0:{name:"punctuation.section.embedded.end.php"}},name:"meta.embedded.line.php",patterns:[{captures:{1:{name:"source.php"},2:{name:"punctuation.section.embedded.end.php"},3:{name:"source.php"}},match:"\\G(\\s*)((\\?))(?=>)",name:"meta.special.empty-tag.php"},{begin:"\\G",contentName:"source.php",end:"(\\?)(?=>)",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"source.php"}},patterns:[{include:"#language"}]}]}]}},name:"blade",patterns:[{include:"text.html.basic"}],repository:{balance_brackets:{patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"#balance_brackets"}]},{match:"[^()]+"}]},blade:{patterns:[{begin:"{{--",beginCaptures:{0:{name:"punctuation.definition.comment.begin.blade"}},end:"--}}",endCaptures:{0:{name:"punctuation.definition.comment.end.blade"}},name:"comment.block.blade",patterns:[{begin:"(^\\s*)(?=<\\?(?![^?]*\\?>))",beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.php"}},end:"(?!\\G)(\\s*$\\n)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.php"}},name:"invalid.illegal.php-code-in-comment.blade",patterns:[{begin:"<\\?(?i:php|=)?",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"}},contentName:"source.php",end:"(\\?)>",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"source.php"}},name:"meta.embedded.block.php",patterns:[{include:"#language"}]}]},{begin:"<\\?(?i:php|=)?(?![^?]*\\?>)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"}},contentName:"source.php",end:"(\\?)>",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"source.php"}},name:"invalid.illegal.php-code-in-comment.blade.meta.embedded.block.php",patterns:[{include:"#language"}]},{begin:"<\\?(?i:php|=)?",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"}},end:">",endCaptures:{0:{name:"punctuation.section.embedded.end.php"}},name:"invalid.illegal.php-code-in-comment.blade.meta.embedded.line.php",patterns:[{captures:{1:{name:"source.php"},2:{name:"punctuation.section.embedded.end.php"},3:{name:"source.php"}},match:"\\G(\\s*)((\\?))(?=>)",name:"meta.special.empty-tag.php"},{begin:"\\G",contentName:"source.php",end:"(\\?)(?=>)",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"source.php"}},patterns:[{include:"#language"}]}]}]},{begin:"(?<!@){{{",beginCaptures:{0:{name:"support.function.construct.begin.blade"}},contentName:"source.php",end:"}}}",endCaptures:{0:{name:"support.function.construct.end.blade"},1:{name:"source.php"}},name:"meta.function.echo.blade",patterns:[{include:"#language"}]},{begin:"(?<![@{]){{",beginCaptures:{0:{name:"support.function.construct.begin.blade"}},contentName:"source.php",end:"}}",endCaptures:{0:{name:"support.function.construct.end.blade"},1:{name:"source.php"}},name:"meta.function.echo.blade",patterns:[{include:"#language"}]},{begin:"(?<!@){!!",beginCaptures:{0:{name:"support.function.construct.begin.blade"}},contentName:"source.php",end:"!!}",endCaptures:{0:{name:"support.function.construct.end.blade"},1:{name:"source.php"}},name:"meta.function.echo.blade",patterns:[{include:"#language"}]},{begin:"(@){{",beginCaptures:{0:{name:"begin.bracket.round.blade"},1:{name:"variable.other.index.php"}},contentName:"source.php",end:"}}",endCaptures:{0:{name:"end.bracket.round.blade"},1:{name:"source.php"}},name:"meta.function.echo.blade",patterns:[{include:"#language"}]},{begin:`(?x)(?<![A-Za-z0-9_@]) (@  (?i:
auth
|break
|can
|cannot
|case
|choice
|component
|continue
|dd
|dump
|each
|elsecan
|elsecannot
|elseif
|empty
|error
|extends
|for
|foreach
|forelse
|guest
|hassection
|if
|include
|includefirst
|includeif
|includeunless
|includewhen
|inject
|isset
|json
|lang
|once
|prepend
|push
|section
|sectionMissing
|slot
|stack
|switch
|unless
|unset
|while
|yield
|servers
|task
|story
|finished
|production
|slack
|method
|props
|env
|livewire
|php
)[\\t ]*
)(\\()
`,beginCaptures:{1:{name:"keyword.blade"},2:{name:"begin.bracket.round.blade.php"}},contentName:"source.php",end:"\\)",endCaptures:{0:{name:"end.bracket.round.blade.php"}},name:"meta.directive.blade",patterns:[{include:"#language"}]},{begin:`(?x)(?<![A-Za-z0-9_@]) (@  (?i:
append
|default
|else
|endauth
|endcan
|endcannot
|endcomponent
|endempty
|enderror
|endfor
|endforeach
|endforelse
|endguest
|endif
|endisset
|endlang
|endonce
|endprepend
|endpush
|endsection
|endslot
|endswitch
|endunless
|endwhile
|overwrite
|parent
|show
|stop
|endtask
|endstory
|endfinished
|endproduction
|endenv
)[\\t ]*
)(\\()
`,beginCaptures:{1:{name:"keyword.blade"},2:{name:"begin.bracket.round.blade.php"}},contentName:"comment.blade",end:"\\)",endCaptures:{0:{name:"end.bracket.round.blade.php"}},name:"meta.directive.blade",patterns:[{include:"#balance_brackets"}]},{match:`(?x)(?<![A-Za-z0-9_@]) @(?:  append
|break
|continue
|csrf
|default
|each
|else
|overwrite
|parent
|sectionMissing
|show
|stack
|stop
|livewireStyles
|livewireScripts
)\\b
`,name:"keyword.blade"},{match:`(?x)(?<![A-Za-z0-9_@]) @(end)? (?i:  auth
|can
|cannot
|component
|empty
|error
|for
|foreach
|forelse
|guest
|if
|isset
|lang
|prepend
|push
|section
|slot
|switch
|unless
|verbatim
|while
|task
|story
|finished
|production
|env
|once
)\\b
`,name:"keyword.blade"},{begin:"(?<![A-Za-z0-9_@])@(?i:php|setup)\\b",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"}},contentName:"source.php",end:"(?<![A-Za-z0-9_@])(?=@(?i:endphp|endsetup)\\b)",endCaptures:{0:{name:"punctuation.section.embedded.end.php"}},name:"meta.embedded.block.blade",patterns:[{include:"#language"}]},{begin:"(?x)(?<![A-Za-z0-9_@]) (@(?i:endphp|endsetup)[\\t ]*) (\\()",beginCaptures:{1:{name:"punctuation.section.embedded.end.php"},2:{name:"begin.bracket.round.blade.php"}},contentName:"comment.blade",end:"\\)",endCaptures:{0:{name:"end.bracket.round.blade.php"}},name:"meta.directive.blade",patterns:[{include:"#balance_brackets"}]},{match:"(?x)(?<![A-Za-z0-9_@]) @(?:(?i)endphp|endsetup)\\b",name:"punctuation.section.embedded.end.php"},{begin:"(?x)(?<![A-Za-z0-9_@]) (@\\w+(?:::w+)?[\\t ]*) (\\() # Followed by opening parentheses",beginCaptures:{1:{name:"entity.name.function.blade"},2:{name:"begin.bracket.round.blade.php"}},contentName:"source.php",end:"\\)",endCaptures:{0:{name:"end.bracket.round.blade.php"}},name:"meta.directive.custom.blade",patterns:[{include:"#language"}]},{match:"(?x)(?<![A-Za-z0-9_@]) @\\w+(?:::w+)?\\b",name:"entity.name.function.blade"}]},"class-builtin":{patterns:[{captures:{1:{name:"punctuation.separator.inheritance.php"}},match:`(?xi)
(\\\\)?\\b
((APC|Append)Iterator|Array(Access|Iterator|Object)
|Bad(Function|Method)CallException
|(Caching|CallbackFilter)Iterator|Collator|Collectable|Cond|Countable|CURLFile
|Date(Interval|Period|Time(Interface|Immutable|Zone)?)?|Directory(Iterator)?|DomainException
|DOM(Attr|CdataSection|CharacterData|Comment|Document(Fragment)?|Element|EntityReference
|Implementation|NamedNodeMap|Node(list)?|ProcessingInstruction|Text|XPath)
|(Error)?Exception|EmptyIterator
|finfo
|Ev(Check|Child|Embed|Fork|Idle|Io|Loop|Periodic|Prepare|Signal|Stat|Timer|Watcher)?
|Event(Base|Buffer(Event)?|SslContext|Http(Request|Connection)?|Config|DnsBase|Util|Listener)?
|FANNConnection|(Filter|Filesystem)Iterator
|Gender\\\\Gender|GlobIterator|Gmagick(Draw|Pixel)?
|Haru(Annotation|Destination|Doc|Encoder|Font|Image|Outline|Page)
|Http((Inflate|Deflate)?Stream|Message|Request(Pool)?|Response|QueryString)
|HRTime\\\\(PerformanceCounter|StopWatch)
|Intl(Calendar|((CodePoint|RuleBased)?Break|Parts)?Iterator|DateFormatter|TimeZone)
|Imagick(Draw|Pixel(Iterator)?)?
|InfiniteIterator|InvalidArgumentException|Iterator(Aggregate|Iterator)?
|JsonSerializable
|KTaglib_(MPEG_(File|AudioProperties)|Tag|ID3v2_(Tag|(AttachedPicture)?Frame))
|Lapack|(Length|Locale|Logic)Exception|LimitIterator|Lua(Closure)?
|Mongo(BinData|Client|Code|Collection|CommandCursor|Cursor(Exception)?|Date|DB(Ref)?|DeleteBatch
|Grid(FS(Cursor|File)?)|Id|InsertBatch|Int(32|64)|Log|Pool|Regex|ResultException|Timestamp
|UpdateBatch|Write(Batch|ConcernException))?
|Memcache(d)?|MessageFormatter|MultipleIterator|Mutex
|mysqli(_(driver|stmt|warning|result))?
|MysqlndUh(Connection|PreparedStatement)
|NoRewindIterator|Normalizer|NumberFormatter
|OCI-(Collection|Lob)|OuterIterator|(OutOf(Bounds|Range)|Overflow)Exception
|ParentIterator|PDO(Statement)?|Phar(Data|FileInfo)?|php_user_filter|Pool
|QuickHash(Int(Set|StringHash)|StringIntHash)
|Recursive(Array|Caching|Directory|Fallback|Filter|Iterator|Regex|Tree)?Iterator
|Reflection(Class|Function(Abstract)?|Method|Object|Parameter|Property|(Zend)?Extension)?
|RangeException|Reflector|RegexIterator|ResourceBundle|RuntimeException|RRD(Creator|Graph|Updater)
|SAM(Connection|Message)|SCA(_(SoapProxy|LocalProxy))?
|SDO_(DAS_(ChangeSummary|Data(Factory|Object)|Relational|Setting|XML(_Document)?)
|Data(Factory|Object)|Exception|List|Model_(Property|ReflectionDataObject|Type)|Sequence)
|SeekableIterator|Serializable|SessionHandler(Interface)?|SimpleXML(Iterator|Element)|SNMP
|Soap(Client|Fault|Header|Param|Server|Var)
|SphinxClient|Spoofchecker
|Spl(DoublyLinkedList|Enum|File(Info|Object)|FixedArray|(Max|Min)?Heap|Observer|ObjectStorage
|(Priority)?Queue|Stack|Subject|Type|TempFileObject)
|SQLite(3(Result|Stmt)?|Database|Result|Unbuffered)
|stdClass|streamWrapper|SVM(Model)?|Swish(Result(s)?|Search)?|Sync(Event|Mutex|ReaderWriter|Semaphore)
|Thread(ed)?|tidy(Node)?|TokyoTyrant(Table|Iterator|Query)?|Transliterator|Traversable
|UConverter|(Underflow|UnexpectedValue)Exception
|V8Js(Exception)?|Varnish(Admin|Log|Stat)
|Worker|Weak(Map|Ref)
|XML(Diff\\\\(Base|DOM|File|Memory)|Reader|Writer)|XsltProcessor
|Yaf_(Route_(Interface|Map|Regex|Rewrite|Simple|Supervar)
|Action_Abstract|Application|Config_(Simple|Ini|Abstract)|Controller_Abstract
|Dispatcher|Exception|Loader|Plugin_Abstract|Registry|Request_(Abstract|Simple|Http)
|Response_Abstract|Router|Session|View_(Simple|Interface))
|Yar_(Client(_Exception)?|Concurrent_Client|Server(_Exception)?)
|ZipArchive|ZMQ(Context|Device|Poll|Socket)?)
\\b`,name:"support.class.builtin.php"}]},"class-name":{patterns:[{begin:"(?i)(?=\\\\?[a-z_0-9]+\\\\)",end:"(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",endCaptures:{1:{name:"support.class.php"}},patterns:[{include:"#namespace"}]},{include:"#class-builtin"},{begin:"(?=[\\\\a-zA-Z_])",end:"(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",endCaptures:{1:{name:"support.class.php"}},patterns:[{include:"#namespace"}]}]},comments:{patterns:[{begin:"/\\*\\*(?=\\s)",beginCaptures:{0:{name:"punctuation.definition.comment.php"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.php"}},name:"comment.block.documentation.phpdoc.php",patterns:[{include:"#php_doc"}]},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.php"}},end:"\\*/",name:"comment.block.php"},{begin:"(^\\s+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.php"}},end:"(?!\\G)",patterns:[{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.php"}},end:"\\n|(?=\\?>)",name:"comment.line.double-slash.php"}]},{begin:"(^\\s+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.php"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.php"}},end:"\\n|(?=\\?>)",name:"comment.line.number-sign.php"}]}]},constants:{patterns:[{match:"(?i)\\b(TRUE|FALSE|NULL|__(FILE|DIR|FUNCTION|CLASS|METHOD|LINE|NAMESPACE)__|ON|OFF|YES|NO|NL|BR|TAB)\\b",name:"constant.language.php"},{captures:{1:{name:"punctuation.separator.inheritance.php"}},match:`(?x)
(\\\\)?\\b
(DEFAULT_INCLUDE_PATH
|EAR_(INSTALL|EXTENSION)_DIR
|E_(ALL|COMPILE_(ERROR|WARNING)|CORE_(ERROR|WARNING)|DEPRECATED|ERROR|NOTICE
|PARSE|RECOVERABLE_ERROR|STRICT|USER_(DEPRECATED|ERROR|NOTICE|WARNING)|WARNING)
|PHP_(ROUND_HALF_(DOWN|EVEN|ODD|UP)|(MAJOR|MINOR|RELEASE)_VERSION|MAXPATHLEN
|BINDIR|SHLIB_SUFFIX|SYSCONFDIR|SAPI|CONFIG_FILE_(PATH|SCAN_DIR)
|INT_(MAX|SIZE)|ZTS|OS|OUTPUT_HANDLER_(START|CONT|END)|DEBUG|DATADIR
|URL_(SCHEME|HOST|USER|PORT|PASS|PATH|QUERY|FRAGMENT)|PREFIX
|EXTRA_VERSION|EXTENSION_DIR|EOL|VERSION(_ID)?
|WINDOWS_(NT_(SERVER|DOMAIN_CONTROLLER|WORKSTATION)
|VERSION_(MAJOR|MINOR)|BUILD|SUITEMASK|SP_(MAJOR|MINOR)
|PRODUCTTYPE|PLATFORM)
|LIBDIR|LOCALSTATEDIR)
|STD(ERR|IN|OUT)|ZEND_(DEBUG_BUILD|THREAD_SAFE))
\\b`,name:"support.constant.core.php"},{captures:{1:{name:"punctuation.separator.inheritance.php"}},match:`(?x)
(\\\\)?\\b
(__COMPILER_HALT_OFFSET__|AB(MON_(1|2|3|4|5|6|7|8|9|10|11|12)|DAY[1-7])
|AM_STR|ASSERT_(ACTIVE|BAIL|CALLBACK_QUIET_EVAL|WARNING)|ALT_DIGITS
|CASE_(UPPER|LOWER)|CHAR_MAX|CONNECTION_(ABORTED|NORMAL|TIMEOUT)|CODESET|COUNT_(NORMAL|RECURSIVE)
|CREDITS_(ALL|DOCS|FULLPAGE|GENERAL|GROUP|MODULES|QA|SAPI)
|CRYPT_(BLOWFISH|EXT_DES|MD5|SHA(256|512)|SALT_LENGTH|STD_DES)|CURRENCY_SYMBOL
|D_(T_)?FMT|DATE_(ATOM|COOKIE|ISO8601|RFC(822|850|1036|1123|2822|3339)|RSS|W3C)
|DAY_[1-7]|DECIMAL_POINT|DIRECTORY_SEPARATOR
|ENT_(COMPAT|IGNORE|(NO)?QUOTES)|EXTR_(IF_EXISTS|OVERWRITE|PREFIX_(ALL|IF_EXISTS|INVALID|SAME)|REFS|SKIP)
|ERA(_(D_(T_)?FMT)|T_FMT|YEAR)?|FRAC_DIGITS|GROUPING|HASH_HMAC|HTML_(ENTITIES|SPECIALCHARS)
|INF|INFO_(ALL|CREDITS|CONFIGURATION|ENVIRONMENT|GENERAL|LICENSEMODULES|VARIABLES)
|INI_(ALL|CANNER_(NORMAL|RAW)|PERDIR|SYSTEM|USER)|INT_(CURR_SYMBOL|FRAC_DIGITS)
|LC_(ALL|COLLATE|CTYPE|MESSAGES|MONETARY|NUMERIC|TIME)|LOCK_(EX|NB|SH|UN)
|LOG_(ALERT|AUTH(PRIV)?|CRIT|CRON|CONS|DAEMON|DEBUG|EMERG|ERR|INFO|LOCAL[1-7]|LPR|KERN|MAIL
|NEWS|NODELAY|NOTICE|NOWAIT|ODELAY|PID|PERROR|WARNING|SYSLOG|UCP|USER)
|M_(1_PI|SQRT(1_2|2|3|PI)|2_(SQRT)?PI|PI(_(2|4))?|E(ULER)?|LN(10|2|PI)|LOG(10|2)E)
|MON_(1|2|3|4|5|6|7|8|9|10|11|12|DECIMAL_POINT|GROUPING|THOUSANDS_SEP)
|N_(CS_PRECEDES|SEP_BY_SPACE|SIGN_POSN)|NAN|NEGATIVE_SIGN|NO(EXPR|STR)
|P_(CS_PRECEDES|SEP_BY_SPACE|SIGN_POSN)|PM_STR|POSITIVE_SIGN
|PATH(_SEPARATOR|INFO_(EXTENSION|(BASE|DIR|FILE)NAME))|RADIXCHAR
|SEEK_(CUR|END|SET)|SORT_(ASC|DESC|LOCALE_STRING|REGULAR|STRING)|STR_PAD_(BOTH|LEFT|RIGHT)
|T_FMT(_AMPM)?|THOUSEP|THOUSANDS_SEP
|UPLOAD_ERR_(CANT_WRITE|EXTENSION|(FORM|INI)_SIZE|NO_(FILE|TMP_DIR)|OK|PARTIAL)
|YES(EXPR|STR))
\\b`,name:"support.constant.std.php"},{captures:{1:{name:"punctuation.separator.inheritance.php"}},match:`(?x)
(\\\\)?\\b
(GLOB_(MARK|BRACE|NO(SORT|CHECK|ESCAPE)|ONLYDIR|ERR|AVAILABLE_FLAGS)
|XML_(SAX_IMPL|(DTD|DOCUMENT(_(FRAG|TYPE))?|HTML_DOCUMENT|NOTATION|NAMESPACE_DECL|PI|COMMENT|DATA_SECTION|TEXT)_NODE
|OPTION_(SKIP_(TAGSTART|WHITE)|CASE_FOLDING|TARGET_ENCODING)
|ERROR_((BAD_CHAR|(ATTRIBUTE_EXTERNAL|BINARY|PARAM|RECURSIVE)_ENTITY)_REF|MISPLACED_XML_PI|SYNTAX|NONE
|NO_(MEMORY|ELEMENTS)|TAG_MISMATCH|INCORRECT_ENCODING|INVALID_TOKEN|DUPLICATE_ATTRIBUTE
|UNCLOSED_(CDATA_SECTION|TOKEN)|UNDEFINED_ENTITY|UNKNOWN_ENCODING|JUNK_AFTER_DOC_ELEMENT
|PARTIAL_CHAR|EXTERNAL_ENTITY_HANDLING|ASYNC_ENTITY)
|ENTITY_(((REF|DECL)_)?NODE)|ELEMENT(_DECL)?_NODE|LOCAL_NAMESPACE|ATTRIBUTE_(NMTOKEN(S)?|NOTATION|NODE)
|CDATA|ID(REF(S)?)?|DECL_NODE|ENTITY|ENUMERATION)
|MHASH_(RIPEMD(128|160|256|320)|GOST|MD(2|4|5)|SHA(1|224|256|384|512)|SNEFRU256|HAVAL(128|160|192|224|256)
|CRC23(B)?|TIGER(128|160)?|WHIRLPOOL|ADLER32)
|MYSQL_(BOTH|NUM|CLIENT_(SSL|COMPRESS|IGNORE_SPACE|INTERACTIVE|ASSOC))
|MYSQLI_(REPORT_(STRICT|INDEX|OFF|ERROR|ALL)|REFRESH_(GRANT|MASTER|BACKUP_LOG|STATUS|SLAVE|HOSTS|THREADS|TABLES|LOG)
|READ_DEFAULT_(FILE|GROUP)|(GROUP|MULTIPLE_KEY|BINARY|BLOB)_FLAG|BOTH
|STMT_ATTR_(CURSOR_TYPE|UPDATE_MAX_LENGTH|PREFETCH_ROWS)|STORE_RESULT
|SERVER_QUERY_(NO_((GOOD_)?INDEX_USED)|WAS_SLOW)|SET_(CHARSET_NAME|FLAG)
|NO_(DEFAULT_VALUE_FLAG|DATA)|NOT_NULL_FLAG|NUM(_FLAG)?
|CURSOR_TYPE_(READ_ONLY|SCROLLABLE|NO_CURSOR|FOR_UPDATE)
|CLIENT_(SSL|NO_SCHEMA|COMPRESS|IGNORE_SPACE|INTERACTIVE|FOUND_ROWS)
|TYPE_(GEOMETRY|((MEDIUM|LONG|TINY)_)?BLOB|BIT|SHORT|STRING|SET|YEAR|NULL|NEWDECIMAL|NEWDATE|CHAR
|TIME(STAMP)?|TINY|INT24|INTERVAL|DOUBLE|DECIMAL|DATE(TIME)?|ENUM|VAR_STRING|FLOAT|LONG(LONG)?)
|TIME_STAMP_FLAG|INIT_COMMAND|ZEROFILL_FLAG|ON_UPDATE_NOW_FLAG
|OPT_(NET_((CMD|READ)_BUFFER_SIZE)|CONNECT_TIMEOUT|INT_AND_FLOAT_NATIVE|LOCAL_INFILE)
|DEBUG_TRACE_ENABLED|DATA_TRUNCATED|USE_RESULT|(ENUM|(PART|PRI|UNIQUE)_KEY|UNSIGNED)_FLAG
|ASSOC|ASYNC|AUTO_INCREMENT_FLAG)
|MCRYPT_(RC(2|6)|RIJNDAEL_(128|192|256)|RAND|GOST|XTEA|MODE_(STREAM|NOFB|CBC|CFB|OFB|ECB)|MARS
|BLOWFISH(_COMPAT)?|SERPENT|SKIPJACK|SAFER(64|128|PLUS)|CRYPT|CAST_(128|256)|TRIPLEDES|THREEWAY
|TWOFISH|IDEA|(3)?DES|DECRYPT|DEV_(U)?RANDOM|PANAMA|ENCRYPT|ENIGNA|WAKE|LOKI97|ARCFOUR(_IV)?)
|STREAM_(REPORT_ERRORS|MUST_SEEK|MKDIR_RECURSIVE|BUFFER_(NONE|FULL|LINE)|SHUT_(RD)?WR
|SOCK_(RDM|RAW|STREAM|SEQPACKET|DGRAM)|SERVER_(BIND|LISTEN)
|NOTIFY_(REDIRECTED|RESOLVE|MIME_TYPE_IS|SEVERITY_(INFO|ERR|WARN)|COMPLETED|CONNECT|PROGRESS
|FILE_SIZE_IS|FAILURE|AUTH_(REQUIRED|RESULT))
|CRYPTO_METHOD_((SSLv2(3)?|SSLv3|TLS)_(CLIENT|SERVER))|CLIENT_((ASYNC_)?CONNECT|PERSISTENT)
|CAST_(AS_STREAM|FOR_SELECT)|(IGNORE|IS)_URL|IPPROTO_(RAW|TCP|ICMP|IP|UDP)|OOB
|OPTION_(READ_(BUFFER|TIMEOUT)|BLOCKING|WRITE_BUFFER)|URL_STAT_(LINK|QUIET)|USE_PATH
|PEEK|PF_(INET(6)?|UNIX)|ENFORCE_SAFE_MODE|FILTER_(ALL|READ|WRITE))
|SUNFUNCS_RET_(DOUBLE|STRING|TIMESTAMP)
|SQLITE_(READONLY|ROW|MISMATCH|MISUSE|BOTH|BUSY|SCHEMA|NOMEM|NOTFOUND|NOTADB|NOLFS|NUM|CORRUPT
|CONSTRAINT|CANTOPEN|TOOBIG|INTERRUPT|INTERNAL|IOERR|OK|DONE|PROTOCOL|PERM|ERROR|EMPTY
|FORMAT|FULL|LOCKED|ABORT|ASSOC|AUTH)
|SQLITE3_(BOTH|BLOB|NUM|NULL|TEXT|INTEGER|OPEN_(READ(ONLY|WRITE)|CREATE)|FLOAT_ASSOC)
|CURL(M_(BAD_((EASY)?HANDLE)|CALL_MULTI_PERFORM|INTERNAL_ERROR|OUT_OF_MEMORY|OK)
|MSG_DONE|SSH_AUTH_(HOST|NONE|DEFAULT|PUBLICKEY|PASSWORD|KEYBOARD)
|CLOSEPOLICY_(SLOWEST|CALLBACK|OLDEST|LEAST_(RECENTLY_USED|TRAFFIC)
|INFO_(REDIRECT_(COUNT|TIME)|REQUEST_SIZE|SSL_VERIFYRESULT|STARTTRANSFER_TIME
|(SIZE|SPEED)_(DOWNLOAD|UPLOAD)|HTTP_CODE|HEADER_(OUT|SIZE)|NAMELOOKUP_TIME
|CONNECT_TIME|CONTENT_(TYPE|LENGTH_(DOWNLOAD|UPLOAD))|CERTINFO|TOTAL_TIME
|PRIVATE|PRETRANSFER_TIME|EFFECTIVE_URL|FILETIME)
|OPT_(RESUME_FROM|RETURNTRANSFER|REDIR_PROTOCOLS|REFERER|READ(DATA|FUNCTION)|RANGE|RANDOM_FILE
|MAX(CONNECTS|REDIRS)|BINARYTRANSFER|BUFFERSIZE
|SSH_(HOST_PUBLIC_KEY_MD5|(PRIVATE|PUBLIC)_KEYFILE)|AUTH_TYPES)
|SSL(CERT(TYPE|PASSWD)?|ENGINE(_DEFAULT)?|VERSION|KEY(TYPE|PASSWD)?)
|SSL_(CIPHER_LIST|VERIFY(HOST|PEER))
|STDERR|HTTP(GET|HEADER|200ALIASES|_VERSION|PROXYTUNNEL|AUTH)
|HEADER(FUNCTION)?|NO(BODY|SIGNAL|PROGRESS)|NETRC|CRLF|CONNECTTIMEOUT(_MS)?
|COOKIE(SESSION|JAR|FILE)?|CUSTOMREQUEST|CERTINFO|CLOSEPOLICY|CA(INFO|PATH)|TRANSFERTEXT
|TCP_NODELAY|TIME(CONDITION|OUT(_MS)?|VALUE)|INTERFACE|INFILE(SIZE)?|IPRESOLVE
|DNS_(CACHE_TIMEOUT|USE_GLOBAL_CACHE)|URL|USER(AGENT|PWD)|UNRESTRICTED_AUTH|UPLOAD
|PRIVATE|PROGRESSFUNCTION|PROXY(TYPE|USERPWD|PORT|AUTH)?|PROTOCOLS|PORT
|POST(REDIR|QUOTE|FIELDS)?|PUT|EGDSOCKET|ENCODING|VERBOSE|KRB4LEVEL|KEYPASSWD|QUOTE|FRESH_CONNECT
|FTP(APPEND|LISTONLY|PORT|SSLAUTH)
|FTP_(SSL|SKIP_PASV_IP|CREATE_MISSING_DIRS|USE_EP(RT|SV)|FILEMETHOD)
|FILE(TIME)?|FORBID_REUSE|FOLLOWLOCATION|FAILONERROR|WRITE(FUNCTION|HEADER)|LOW_SPEED_(LIMIT|TIME)
|AUTOREFERER)
|PROXY_(HTTP|SOCKS(4|5))|PROTO_(SCP|SFTP|HTTP(S)?|TELNET|TFTP|DICT|FTP(S)?|FILE|LDAP(S)?|ALL)
|E_((RECV|READ)_ERROR|GOT_NOTHING|MALFORMAT_USER
|BAD_(CONTENT_ENCODING|CALLING_ORDER|PASSWORD_ENTERED|FUNCTION_ARGUMENT)
|SSH|SSL_(CIPHER|CONNECT_ERROR|CERTPROBLEM|CACERT|PEER_CERTIFICATE|ENGINE_(NOTFOUND|SETFAILED))
|SHARE_IN_USE|SEND_ERROR|HTTP_(RANGE_ERROR|NOT_FOUND|PORT_FAILED|POST_ERROR)
|COULDNT_(RESOLVE_(HOST|PROXY)|CONNECT)|TOO_MANY_REDIRECTS|TELNET_OPTION_SYNTAX|OBSOLETE
|OUT_OF_MEMORY|OPERATION|TIMEOUTED|OK|URL_MALFORMAT(_USER)?|UNSUPPORTED_PROTOCOL
|UNKNOWN_TELNET_OPTION|PARTIAL_FILE
|FTP_(BAD_DOWNLOAD_RESUME|SSL_FAILED|COULDNT_(RETR_FILE|GET_SIZE|STOR_FILE|SET_(BINARY|ASCII)|USE_REST)
|CANT_(GET_HOST|RECONNECT)|USER_PASSWORD_INCORRECT|PORT_FAILED|QUOTE_ERROR|WRITE_ERROR
|WEIRD_((PASS|PASV|SERVER|USER)_REPLY|227_FORMAT)|ACCESS_DENIED)
|FILESIZE_EXCEEDED|FILE_COULDNT_READ_FILE|FUNCTION_NOT_FOUND|FAILED_INIT|WRITE_ERROR|LIBRARY_NOT_FOUND
|LDAP_(SEARCH_FAILED|CANNOT_BIND|INVALID_URL)|ABORTED_BY_CALLBACK)
|VERSION_NOW
|FTP(METHOD_(MULTI|SINGLE|NO)CWD|SSL_(ALL|NONE|CONTROL|TRY)|AUTH_(DEFAULT|SSL|TLS))
|AUTH_(ANY(SAFE)?|BASIC|DIGEST|GSSNEGOTIATE|NTLM))
|CURL_(HTTP_VERSION_(1_(0|1)|NONE)|NETRC_(REQUIRED|IGNORED|OPTIONAL)|TIMECOND_(IF(UN)?MODSINCE|LASTMOD)
|IPRESOLVE_(V(4|6)|WHATEVER)|VERSION_(SSL|IPV6|KERBEROS4|LIBZ))
|IMAGETYPE_(GIF|XBM|BMP|SWF|COUNT|TIFF_(MM|II)|ICO|IFF|UNKNOWN|JB2|JPX|JP2|JPC|JPEG(2000)?|PSD|PNG|WBMP)
|INPUT_(REQUEST|GET|SERVER|SESSION|COOKIE|POST|ENV)|ICONV_(MIME_DECODE_(STRICT|CONTINUE_ON_ERROR)|IMPL|VERSION)
|DNS_(MX|SRV|SOA|HINFO|NS|NAPTR|CNAME|TXT|PTR|ANY|ALL|AAAA|A(6)?)
|DOM(STRING_SIZE_ERR)
|DOM_((SYNTAX|HIERARCHY_REQUEST|NO_(MODIFICATION_ALLOWED|DATA_ALLOWED)|NOT_(FOUND|SUPPORTED)|NAMESPACE
|INDEX_SIZE|USE_ATTRIBUTE|VALID_(MODIFICATION|STATE|CHARACTER|ACCESS)|PHP|VALIDATION|WRONG_DOCUMENT)_ERR)
|JSON_(HEX_(TAG|QUOT|AMP|APOS)|NUMERIC_CHECK|ERROR_(SYNTAX|STATE_MISMATCH|NONE|CTRL_CHAR|DEPTH|UTF8)|FORCE_OBJECT)
|PREG_((D_UTF8(_OFFSET)?|NO|INTERNAL|(BACKTRACK|RECURSION)_LIMIT)_ERROR|GREP_INVERT
|SPLIT_(NO_EMPTY|(DELIM|OFFSET)_CAPTURE)|SET_ORDER|OFFSET_CAPTURE|PATTERN_ORDER)
|PSFS_(PASS_ON|ERR_FATAL|FEED_ME|FLAG_(NORMAL|FLUSH_(CLOSE|INC)))
|PCRE_VERSION|POSIX_((F|R|W|X)_OK|S_IF(REG|BLK|SOCK|CHR|IFO))
|FNM_(NOESCAPE|CASEFOLD|PERIOD|PATHNAME)
|FILTER_(REQUIRE_(SCALAR|ARRAY)|NULL_ON_FAILURE|CALLBACK|DEFAULT|UNSAFE_RAW
|SANITIZE_(MAGIC_QUOTES|STRING|STRIPPED|SPECIAL_CHARS|NUMBER_(INT|FLOAT)|URL
|EMAIL|ENCODED|FULL_SPCIAL_CHARS)
|VALIDATE_(REGEXP|BOOLEAN|INT|IP|URL|EMAIL|FLOAT)
|FORCE_ARRAY
|FLAG_(SCHEME_REQUIRED|STRIP_(BACKTICK|HIGH|LOW)|HOST_REQUIRED|NONE|NO_(RES|PRIV)_RANGE|ENCODE_QUOTES
|IPV(4|6)|PATH_REQUIRED|EMPTY_STRING_NULL|ENCODE_(HIGH|LOW|AMP)|QUERY_REQUIRED
|ALLOW_(SCIENTIFIC|HEX|THOUSAND|OCTAL|FRACTION)))
|FILE_(BINARY|SKIP_EMPTY_LINES|NO_DEFAULT_CONTEXT|TEXT|IGNORE_NEW_LINES|USE_INCLUDE_PATH|APPEND)
|FILEINFO_(RAW|MIME(_(ENCODING|TYPE))?|SYMLINK|NONE|CONTINUE|DEVICES|PRESERVE_ATIME)
|FORCE_(DEFLATE|GZIP)
|LIBXML_(XINCLUDE|NSCLEAN|NO(XMLDECL|BLANKS|NET|CDATA|ERROR|EMPTYTAG|ENT|WARNING)
|COMPACT|DTD(VALID|LOAD|ATTR)|((DOTTED|LOADED)_)?VERSION|PARSEHUGE|ERR_(NONE|ERROR|FATAL|WARNING)))
\\b`,name:"support.constant.ext.php"},{captures:{1:{name:"punctuation.separator.inheritance.php"}},match:`(?x)
(\\\\)?\\b
(T_(RETURN|REQUIRE(_ONCE)?|GOTO|GLOBAL|(MINUS|MOD|MUL|XOR)_EQUAL|METHOD_C|ML_COMMENT|BREAK
|BOOL_CAST|BOOLEAN_(AND|OR)|BAD_CHARACTER|SR(_EQUAL)?|STRING(_CAST|VARNAME)?|START_HEREDOC|STATIC
|SWITCH|SL(_EQUAL)?|HALT_COMPILER|NS_(C|SEPARATOR)|NUM_STRING|NEW|NAMESPACE|CHARACTER|COMMENT
|CONSTANT(_ENCAPSED_STRING)?|CONCAT_EQUAL|CONTINUE|CURLY_OPEN|CLOSE_TAG|CLONE|CLASS(_C)?
|CASE|CATCH|TRY|THROW|IMPLEMENTS|ISSET|IS_((GREATER|SMALLER)_OR_EQUAL|(NOT_)?(IDENTICAL|EQUAL))
|INSTANCEOF|INCLUDE(_ONCE)?|INC|INT_CAST|INTERFACE|INLINE_HTML|IF|OR_EQUAL|OBJECT_(CAST|OPERATOR)
|OPEN_TAG(_WITH_ECHO)?|OLD_FUNCTION|DNUMBER|DIR|DIV_EQUAL|DOC_COMMENT|DOUBLE_(ARROW|CAST|COLON)
|DOLLAR_OPEN_CURLY_BRACES|DO|DEC|DECLARE|DEFAULT|USE|UNSET(_CAST)?|PRINT|PRIVATE|PROTECTED|PUBLIC
|PLUS_EQUAL|PAAMAYIM_NEKUDOTAYIM|EXTENDS|EXIT|EMPTY|ENCAPSED_AND_WHITESPACE
|END(SWITCH|IF|DECLARE|FOR(EACH)?|WHILE)|END_HEREDOC|ECHO|EVAL|ELSE(IF)?|VAR(IABLE)?|FINAL|FILE
|FOR(EACH)?|FUNC_C|FUNCTION|WHITESPACE|WHILE|LNUMBER|LIST|LINE|LOGICAL_(AND|OR|XOR)
|ARRAY_(CAST)?|ABSTRACT|AS|AND_EQUAL))
\\b`,name:"support.constant.parser-token.php"},{match:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",name:"constant.other.php"}]},"function-call":{patterns:[{begin:`(?xi)
(
\\\\?\\b
[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*
(?:\\\\[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)+
)\\s*(\\()`,beginCaptures:{1:{patterns:[{include:"#namespace"},{match:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",name:"entity.name.function.php"}]},2:{name:"punctuation.definition.arguments.begin.bracket.round.php"}},end:"\\)|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.arguments.end.bracket.round.php"}},name:"meta.function-call.php",patterns:[{include:"#language"}]},{begin:"(?i)(\\\\)?\\b([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(\\()",beginCaptures:{1:{patterns:[{include:"#namespace"}]},2:{patterns:[{include:"#support"},{match:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",name:"entity.name.function.php"}]},3:{name:"punctuation.definition.arguments.begin.bracket.round.php"}},end:"\\)|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.arguments.end.bracket.round.php"}},name:"meta.function-call.php",patterns:[{include:"#language"}]},{match:"(?i)\\b(print|echo)\\b",name:"support.function.construct.output.php"}]},"function-parameters":{patterns:[{include:"#comments"},{match:",",name:"punctuation.separator.delimiter.php"},{begin:`(?xi)
(array)
\\s+((&)?\\s*(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
\\s*(=)\\s*(array)\\s*(\\()`,beginCaptures:{1:{name:"storage.type.php"},2:{name:"variable.other.php"},3:{name:"storage.modifier.reference.php"},4:{name:"punctuation.definition.variable.php"},5:{name:"keyword.operator.assignment.php"},6:{name:"support.function.construct.php"},7:{name:"punctuation.definition.array.begin.bracket.round.php"}},contentName:"meta.array.php",end:"\\)",endCaptures:{0:{name:"punctuation.definition.array.end.bracket.round.php"}},name:"meta.function.parameter.array.php",patterns:[{include:"#comments"},{include:"#strings"},{include:"#numbers"}]},{captures:{1:{name:"storage.type.php"},2:{name:"variable.other.php"},3:{name:"storage.modifier.reference.php"},4:{name:"punctuation.definition.variable.php"},5:{name:"keyword.operator.assignment.php"},6:{name:"constant.language.php"},7:{name:"punctuation.section.array.begin.php"},8:{patterns:[{include:"#parameter-default-types"}]},9:{name:"punctuation.section.array.end.php"},10:{name:"invalid.illegal.non-null-typehinted.php"}},match:`(?xi)
(array|callable)
\\s+((&)?\\s*(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
(?:
\\s*(=)\\s*
(?:
(null)
|
(\\[)((?>[^\\[\\]]+|\\[\\g<8>\\])*)(\\])
|((?:\\S*?\\(\\))|(?:\\S*?))
)
)?
\\s*(?=,|\\)|/[/*]|\\#|$)`,name:"meta.function.parameter.array.php"},{begin:`(?xi)
(\\\\?(?:[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\\\)*)
([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
\\s+((&)?\\s*(\\.\\.\\.)?(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)`,beginCaptures:{1:{name:"support.other.namespace.php",patterns:[{match:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",name:"storage.type.php"},{match:"\\\\",name:"punctuation.separator.inheritance.php"}]},2:{name:"storage.type.php"},3:{name:"variable.other.php"},4:{name:"storage.modifier.reference.php"},5:{name:"keyword.operator.variadic.php"},6:{name:"punctuation.definition.variable.php"}},end:"(?=,|\\)|/[/*]|\\#)",name:"meta.function.parameter.typehinted.php",patterns:[{begin:"=",beginCaptures:{0:{name:"keyword.operator.assignment.php"}},end:"(?=,|\\)|/[/*]|\\#)",patterns:[{include:"#language"}]}]},{captures:{1:{name:"variable.other.php"},2:{name:"storage.modifier.reference.php"},3:{name:"keyword.operator.variadic.php"},4:{name:"punctuation.definition.variable.php"}},match:`(?xi)
((&)?\\s*(\\.\\.\\.)?(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
\\s*(?=,|\\)|/[/*]|\\#|$)`,name:"meta.function.parameter.no-default.php"},{begin:`(?xi)
((&)?\\s*(\\.\\.\\.)?(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
\\s*(=)\\s*
(?:(\\[)((?>[^\\[\\]]+|\\[\\g<6>\\])*)(\\]))?`,beginCaptures:{1:{name:"variable.other.php"},2:{name:"storage.modifier.reference.php"},3:{name:"keyword.operator.variadic.php"},4:{name:"punctuation.definition.variable.php"},5:{name:"keyword.operator.assignment.php"},6:{name:"punctuation.section.array.begin.php"},7:{patterns:[{include:"#parameter-default-types"}]},8:{name:"punctuation.section.array.end.php"}},end:"(?=,|\\)|/[/*]|\\#)",name:"meta.function.parameter.default.php",patterns:[{include:"#parameter-default-types"}]}]},heredoc:{patterns:[{begin:'(?i)(?=<<<\\s*("?)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)(\\1)\\s*$)',end:"(?!\\G)",name:"string.unquoted.heredoc.php",patterns:[{include:"#heredoc_interior"}]},{begin:"(?=<<<\\s*'([a-zA-Z_]+[a-zA-Z0-9_]*)'\\s*$)",end:"(?!\\G)",name:"string.unquoted.nowdoc.php",patterns:[{include:"#nowdoc_interior"}]}]},heredoc_interior:{patterns:[{begin:'(<<<)\\s*("?)(HTML)(\\2)(\\s*)$',beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},3:{name:"keyword.operator.heredoc.php"},5:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"text.html",end:"^(\\3)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.heredoc.php"}},name:"meta.embedded.html",patterns:[{include:"#interpolation"},{include:"text.html.basic"}]},{begin:'(<<<)\\s*("?)(XML)(\\2)(\\s*)$',beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},3:{name:"keyword.operator.heredoc.php"},5:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"text.xml",end:"^(\\3)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.heredoc.php"}},name:"meta.embedded.xml",patterns:[{include:"#interpolation"},{include:"text.xml"}]},{begin:'(<<<)\\s*("?)(SQL)(\\2)(\\s*)$',beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},3:{name:"keyword.operator.heredoc.php"},5:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"source.sql",end:"^(\\3)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.heredoc.php"}},name:"meta.embedded.sql",patterns:[{include:"#interpolation"},{include:"source.sql"}]},{begin:'(<<<)\\s*("?)(JAVASCRIPT|JS)(\\2)(\\s*)$',beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},3:{name:"keyword.operator.heredoc.php"},5:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"source.js",end:"^(\\3)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.heredoc.php"}},name:"meta.embedded.js",patterns:[{include:"#interpolation"},{include:"source.js"}]},{begin:'(<<<)\\s*("?)(JSON)(\\2)(\\s*)$',beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},3:{name:"keyword.operator.heredoc.php"},5:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"source.json",end:"^(\\3)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.heredoc.php"}},name:"meta.embedded.json",patterns:[{include:"#interpolation"},{include:"source.json"}]},{begin:'(<<<)\\s*("?)(CSS)(\\2)(\\s*)$',beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},3:{name:"keyword.operator.heredoc.php"},5:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"source.css",end:"^(\\3)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.heredoc.php"}},name:"meta.embedded.css",patterns:[{include:"#interpolation"},{include:"source.css"}]},{begin:'(<<<)\\s*("?)(REGEXP?)(\\2)(\\s*)$',beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},3:{name:"keyword.operator.heredoc.php"},5:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"string.regexp.heredoc.php",end:"^(\\3)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.heredoc.php"}},patterns:[{include:"#interpolation"},{match:"(\\\\){1,2}[.$^\\[\\]{}]",name:"constant.character.escape.regex.php"},{captures:{1:{name:"punctuation.definition.arbitrary-repitition.php"},3:{name:"punctuation.definition.arbitrary-repitition.php"}},match:"({)\\d+(,\\d+)?(})",name:"string.regexp.arbitrary-repitition.php"},{begin:"\\[(?:\\^?\\])?",captures:{0:{name:"punctuation.definition.character-class.php"}},end:"\\]",name:"string.regexp.character-class.php",patterns:[{match:"\\\\[\\\\'\\[\\]]",name:"constant.character.escape.php"}]},{match:"[$^+*]",name:"keyword.operator.regexp.php"},{begin:"(?i)(?<=^|\\s)(#)\\s(?=[[a-z0-9_\\x{7f}-\\x{ff},. \\t?!-][^\\x{00}-\\x{7f}]]*$)",beginCaptures:{1:{name:"punctuation.definition.comment.php"}},end:"$",endCaptures:{0:{name:"punctuation.definition.comment.php"}},name:"comment.line.number-sign.php"}]},{begin:'(?i)(<<<)\\s*("?)([a-z_\\x{7f}-\\x{ff}]+[a-z0-9_\\x{7f}-\\x{ff}]*)(\\2)(\\s*)',beginCaptures:{1:{name:"punctuation.definition.string.php"},3:{name:"keyword.operator.heredoc.php"},5:{name:"invalid.illegal.trailing-whitespace.php"}},end:"^(\\3)\\b",endCaptures:{1:{name:"keyword.operator.heredoc.php"}},patterns:[{include:"#interpolation"}]}]},instantiation:{begin:"(?i)(new)\\s+",beginCaptures:{1:{name:"keyword.other.new.php"}},end:"(?i)(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",patterns:[{match:"(?i)(parent|static|self)(?![a-z0-9_\\x{7f}-\\x{ff}])",name:"storage.type.php"},{include:"#class-name"},{include:"#variable-name"}]},interpolation:{patterns:[{match:"\\\\[0-7]{1,3}",name:"constant.character.escape.octal.php"},{match:"\\\\x[0-9A-Fa-f]{1,2}",name:"constant.character.escape.hex.php"},{match:"\\\\u{[0-9A-Fa-f]+}",name:"constant.character.escape.unicode.php"},{match:'\\\\[nrtvef$"\\\\]',name:"constant.character.escape.php"},{begin:"{(?=\\$.*?})",beginCaptures:{0:{name:"punctuation.definition.variable.php"}},end:"}",endCaptures:{0:{name:"punctuation.definition.variable.php"}},patterns:[{include:"#language"}]},{include:"#variable-name"}]},"invoke-call":{captures:{1:{name:"punctuation.definition.variable.php"},2:{name:"variable.other.php"}},match:"(?i)(\\$+)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)(?=\\s*\\()",name:"meta.function-call.invoke.php"},language:{patterns:[{include:"#comments"},{begin:"(?i)^\\s*(interface)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(extends)?\\s*",beginCaptures:{1:{name:"storage.type.interface.php"},2:{name:"entity.name.type.interface.php"},3:{name:"storage.modifier.extends.php"}},end:"(?i)((?:[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\s*,\\s*)*)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?\\s*(?:(?={)|$)",endCaptures:{1:{patterns:[{match:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",name:"entity.other.inherited-class.php"},{match:",",name:"punctuation.separator.classes.php"}]},2:{name:"entity.other.inherited-class.php"}},name:"meta.interface.php",patterns:[{include:"#namespace"}]},{begin:"(?i)^\\s*(trait)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)",beginCaptures:{1:{name:"storage.type.trait.php"},2:{name:"entity.name.type.trait.php"}},end:"(?={)",name:"meta.trait.php",patterns:[{include:"#comments"}]},{captures:{1:{name:"keyword.other.namespace.php"},2:{name:"entity.name.type.namespace.php",patterns:[{match:"\\\\",name:"punctuation.separator.inheritance.php"}]}},match:"(?i)(?:^|(?<=<\\?php))\\s*(namespace)\\s+([a-z0-9_\\x{7f}-\\x{ff}\\\\]+)(?=\\s*;)",name:"meta.namespace.php"},{begin:"(?i)(?:^|(?<=<\\?php))\\s*(namespace)\\s+",beginCaptures:{1:{name:"keyword.other.namespace.php"}},end:"(?<=})|(?=\\?>)",name:"meta.namespace.php",patterns:[{include:"#comments"},{captures:{0:{patterns:[{match:"\\\\",name:"punctuation.separator.inheritance.php"}]}},match:"(?i)[a-z0-9_\\x{7f}-\\x{ff}\\\\]+",name:"entity.name.type.namespace.php"},{begin:"{",beginCaptures:{0:{name:"punctuation.definition.namespace.begin.bracket.curly.php"}},end:"}|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.namespace.end.bracket.curly.php"}},patterns:[{include:"#language"}]},{match:"[^\\s]+",name:"invalid.illegal.identifier.php"}]},{match:"\\s+(?=use\\b)"},{begin:"(?i)\\buse\\b",beginCaptures:{0:{name:"keyword.other.use.php"}},end:"(?<=})|(?=;)",name:"meta.use.php",patterns:[{match:"\\b(const|function)\\b",name:"storage.type.${1:/downcase}.php"},{begin:"{",beginCaptures:{0:{name:"punctuation.definition.use.begin.bracket.curly.php"}},end:"}",endCaptures:{0:{name:"punctuation.definition.use.end.bracket.curly.php"}},patterns:[{include:"#scope-resolution"},{captures:{1:{name:"keyword.other.use-as.php"},2:{name:"storage.modifier.php"},3:{name:"entity.other.alias.php"}},match:`(?xi)
\\b(as)
\\s+(final|abstract|public|private|protected|static)
\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
\\b`},{captures:{1:{name:"keyword.other.use-as.php"},2:{patterns:[{match:"^(?:final|abstract|public|private|protected|static)$",name:"storage.modifier.php"},{match:".+",name:"entity.other.alias.php"}]}},match:`(?xi)
\\b(as)
\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
\\b`},{captures:{1:{name:"keyword.other.use-insteadof.php"},2:{name:"support.class.php"}},match:"(?i)\\b(insteadof)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)"},{match:";",name:"punctuation.terminator.expression.php"},{include:"#use-inner"}]},{include:"#use-inner"}]},{begin:"(?i)^\\s*(?:(abstract|final)\\s+)?(class)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)",beginCaptures:{1:{name:"storage.modifier.${1:/downcase}.php"},2:{name:"storage.type.class.php"},3:{name:"entity.name.type.class.php"}},end:"}|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.class.end.bracket.curly.php"}},name:"meta.class.php",patterns:[{include:"#comments"},{begin:"(?i)(extends)\\s+",beginCaptures:{1:{name:"storage.modifier.extends.php"}},contentName:"meta.other.inherited-class.php",end:"(?i)(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",patterns:[{begin:"(?i)(?=\\\\?[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\\\)",end:"(?i)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",endCaptures:{1:{name:"entity.other.inherited-class.php"}},patterns:[{include:"#namespace"}]},{include:"#class-builtin"},{include:"#namespace"},{match:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",name:"entity.other.inherited-class.php"}]},{begin:"(?i)(implements)\\s+",beginCaptures:{1:{name:"storage.modifier.implements.php"}},end:"(?i)(?=[;{])",patterns:[{include:"#comments"},{begin:"(?i)(?=[a-z0-9_\\x{7f}-\\x{ff}\\\\]+)",contentName:"meta.other.inherited-class.php",end:"(?i)(?:\\s*(?:,|(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\\\s]))\\s*)",patterns:[{begin:"(?i)(?=\\\\?[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\\\)",end:"(?i)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",endCaptures:{1:{name:"entity.other.inherited-class.php"}},patterns:[{include:"#namespace"}]},{include:"#class-builtin"},{include:"#namespace"},{match:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",name:"entity.other.inherited-class.php"}]}]},{begin:"{",beginCaptures:{0:{name:"punctuation.definition.class.begin.bracket.curly.php"}},contentName:"meta.class.body.php",end:"(?=}|\\?>)",patterns:[{include:"#language"}]}]},{include:"#switch_statement"},{captures:{1:{name:"keyword.control.${1:/downcase}.php"}},match:`(?x)
\\s*
\\b(
break|case|continue|declare|default|die|do|
else(if)?|end(declare|for(each)?|if|switch|while)|exit|
for(each)?|if|return|switch|use|while|yield
)\\b`},{begin:"(?i)\\b((?:require|include)(?:_once)?)\\s+",beginCaptures:{1:{name:"keyword.control.import.include.php"}},end:"(?=\\s|;|$|\\?>)",name:"meta.include.php",patterns:[{include:"#language"}]},{begin:"\\b(catch)\\s*(\\()",beginCaptures:{1:{name:"keyword.control.exception.catch.php"},2:{name:"punctuation.definition.parameters.begin.bracket.round.php"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.php"}},name:"meta.catch.php",patterns:[{include:"#namespace"},{captures:{1:{name:"support.class.exception.php"},2:{patterns:[{match:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",name:"support.class.exception.php"},{match:"\\|",name:"punctuation.separator.delimiter.php"}]},3:{name:"variable.other.php"},4:{name:"punctuation.definition.variable.php"}},match:`(?xi)
([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
((?:\\s*\\|\\s*[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)*)
\\s*
((\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)`}]},{match:"\\b(catch|try|throw|exception|finally)\\b",name:"keyword.control.exception.php"},{begin:"(?i)\\b(function)\\s*(?=\\()",beginCaptures:{1:{name:"storage.type.function.php"}},end:"(?={)",name:"meta.function.closure.php",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.bracket.round.php"}},contentName:"meta.function.parameters.php",end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.php"}},patterns:[{include:"#function-parameters"}]},{begin:"(?i)(use)\\s*(\\()",beginCaptures:{1:{name:"keyword.other.function.use.php"},2:{name:"punctuation.definition.parameters.begin.bracket.round.php"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.php"}},patterns:[{captures:{1:{name:"variable.other.php"},2:{name:"storage.modifier.reference.php"},3:{name:"punctuation.definition.variable.php"}},match:"(?i)((&)?\\s*(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(?=,|\\))",name:"meta.function.closure.use.php"}]}]},{begin:`(?x)
((?:(?:final|abstract|public|private|protected|static)\\s+)*)
(function)\\s+
(?i:
(__(?:call|construct|debugInfo|destruct|get|set|isset|unset|tostring|
clone|set_state|sleep|wakeup|autoload|invoke|callStatic))
|([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)
)
\\s*(\\()`,beginCaptures:{1:{patterns:[{match:"final|abstract|public|private|protected|static",name:"storage.modifier.php"}]},2:{name:"storage.type.function.php"},3:{name:"support.function.magic.php"},4:{name:"entity.name.function.php"},5:{name:"punctuation.definition.parameters.begin.bracket.round.php"}},contentName:"meta.function.parameters.php",end:"(\\))(?:\\s*(:)\\s*([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*))?",endCaptures:{1:{name:"punctuation.definition.parameters.end.bracket.round.php"},2:{name:"keyword.operator.return-value.php"},3:{name:"storage.type.php"}},name:"meta.function.php",patterns:[{include:"#function-parameters"}]},{include:"#invoke-call"},{include:"#scope-resolution"},{include:"#variables"},{include:"#strings"},{captures:{1:{name:"support.function.construct.php"},2:{name:"punctuation.definition.array.begin.bracket.round.php"},3:{name:"punctuation.definition.array.end.bracket.round.php"}},match:"(array)(\\()(\\))",name:"meta.array.empty.php"},{begin:"(array)(\\()",beginCaptures:{1:{name:"support.function.construct.php"},2:{name:"punctuation.definition.array.begin.bracket.round.php"}},end:"\\)|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.array.end.bracket.round.php"}},name:"meta.array.php",patterns:[{include:"#language"}]},{captures:{1:{name:"punctuation.definition.storage-type.begin.bracket.round.php"},2:{name:"storage.type.php"},3:{name:"punctuation.definition.storage-type.end.bracket.round.php"}},match:"(?i)(\\()\\s*(array|real|double|float|int(?:eger)?|bool(?:ean)?|string|object|binary|unset)\\s*(\\))"},{match:"(?i)\\b(array|real|double|float|int(eger)?|bool(ean)?|string|class|var|function|interface|trait|parent|self|object)\\b",name:"storage.type.php"},{match:"(?i)\\b(global|abstract|const|extends|implements|final|private|protected|public|static)\\b",name:"storage.modifier.php"},{include:"#object"},{match:";",name:"punctuation.terminator.expression.php"},{match:":",name:"punctuation.terminator.statement.php"},{include:"#heredoc"},{include:"#numbers"},{match:"(?i)\\bclone\\b",name:"keyword.other.clone.php"},{match:"\\.=?",name:"keyword.operator.string.php"},{match:"=>",name:"keyword.operator.key.php"},{captures:{1:{name:"keyword.operator.assignment.php"},2:{name:"storage.modifier.reference.php"},3:{name:"storage.modifier.reference.php"}},match:"(?i)(\\=)(&)|(&)(?=[$a-z_])"},{match:"@",name:"keyword.operator.error-control.php"},{match:"===|==|!==|!=|<>",name:"keyword.operator.comparison.php"},{match:"=|\\+=|\\-=|\\*=|/=|%=|&=|\\|=|\\^=|<<=|>>=",name:"keyword.operator.assignment.php"},{match:"<=>|<=|>=|<|>",name:"keyword.operator.comparison.php"},{match:"\\-\\-|\\+\\+",name:"keyword.operator.increment-decrement.php"},{match:"\\-|\\+|\\*|/|%",name:"keyword.operator.arithmetic.php"},{match:"(?i)(!|&&|\\|\\|)|\\b(and|or|xor|as)\\b",name:"keyword.operator.logical.php"},{include:"#function-call"},{match:"<<|>>|~|\\^|&|\\|",name:"keyword.operator.bitwise.php"},{begin:"(?i)\\b(instanceof)\\s+(?=[\\\\$a-z_])",beginCaptures:{1:{name:"keyword.operator.type.php"}},end:"(?=[^\\\\$a-z0-9_\\x{7f}-\\x{ff}])",patterns:[{include:"#class-name"},{include:"#variable-name"}]},{include:"#instantiation"},{captures:{1:{name:"keyword.control.goto.php"},2:{name:"support.other.php"}},match:"(?i)(goto)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)"},{captures:{1:{name:"entity.name.goto-label.php"}},match:"(?i)^\\s*([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*:(?!:)"},{include:"#string-backtick"},{begin:"{",beginCaptures:{0:{name:"punctuation.definition.begin.bracket.curly.php"}},end:"}|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.end.bracket.curly.php"}},patterns:[{include:"#language"}]},{begin:"\\[",beginCaptures:{0:{name:"punctuation.section.array.begin.php"}},end:"\\]|(?=\\?>)",endCaptures:{0:{name:"punctuation.section.array.end.php"}},patterns:[{include:"#language"}]},{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.begin.bracket.round.php"}},end:"\\)|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.end.bracket.round.php"}},patterns:[{include:"#language"}]},{include:"#constants"},{match:",",name:"punctuation.separator.delimiter.php"}]},namespace:{begin:"(?i)(?:(namespace)|[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?(\\\\)(?=.*?[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",beginCaptures:{1:{name:"variable.language.namespace.php"},2:{name:"punctuation.separator.inheritance.php"}},end:"(?i)(?=[a-z0-9_\\x{7f}-\\x{ff}]*[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",name:"support.other.namespace.php",patterns:[{match:"\\\\",name:"punctuation.separator.inheritance.php"}]},nowdoc_interior:{patterns:[{begin:"(<<<)\\s*'(HTML)'(\\s*)$",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},2:{name:"keyword.operator.nowdoc.php"},3:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"text.html",end:"^(\\2)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.nowdoc.php"}},name:"meta.embedded.html",patterns:[{include:"text.html.basic"}]},{begin:"(<<<)\\s*'(XML)'(\\s*)$",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},2:{name:"keyword.operator.nowdoc.php"},3:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"text.xml",end:"^(\\2)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.nowdoc.php"}},name:"meta.embedded.xml",patterns:[{include:"text.xml"}]},{begin:"(<<<)\\s*'(SQL)'(\\s*)$",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},2:{name:"keyword.operator.nowdoc.php"},3:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"source.sql",end:"^(\\2)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.nowdoc.php"}},name:"meta.embedded.sql",patterns:[{include:"source.sql"}]},{begin:"(<<<)\\s*'(JAVASCRIPT|JS)'(\\s*)$",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},2:{name:"keyword.operator.nowdoc.php"},3:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"source.js",end:"^(\\2)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.nowdoc.php"}},name:"meta.embedded.js",patterns:[{include:"source.js"}]},{begin:"(<<<)\\s*'(JSON)'(\\s*)$",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},2:{name:"keyword.operator.nowdoc.php"},3:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"source.json",end:"^(\\2)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.nowdoc.php"}},name:"meta.embedded.json",patterns:[{include:"source.json"}]},{begin:"(<<<)\\s*'(CSS)'(\\s*)$",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},2:{name:"keyword.operator.nowdoc.php"},3:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"source.css",end:"^(\\2)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.nowdoc.php"}},name:"meta.embedded.css",patterns:[{include:"source.css"}]},{begin:"(<<<)\\s*'(REGEXP?)'(\\s*)$",beginCaptures:{0:{name:"punctuation.section.embedded.begin.php"},1:{name:"punctuation.definition.string.php"},2:{name:"keyword.operator.nowdoc.php"},3:{name:"invalid.illegal.trailing-whitespace.php"}},contentName:"string.regexp.nowdoc.php",end:"^(\\2)\\b",endCaptures:{0:{name:"punctuation.section.embedded.end.php"},1:{name:"keyword.operator.nowdoc.php"}},patterns:[{match:"(\\\\){1,2}[.$^\\[\\]{}]",name:"constant.character.escape.regex.php"},{captures:{1:{name:"punctuation.definition.arbitrary-repitition.php"},3:{name:"punctuation.definition.arbitrary-repitition.php"}},match:"({)\\d+(,\\d+)?(})",name:"string.regexp.arbitrary-repitition.php"},{begin:"\\[(?:\\^?\\])?",captures:{0:{name:"punctuation.definition.character-class.php"}},end:"\\]",name:"string.regexp.character-class.php",patterns:[{match:"\\\\[\\\\'\\[\\]]",name:"constant.character.escape.php"}]},{match:"[$^+*]",name:"keyword.operator.regexp.php"},{begin:"(?i)(?<=^|\\s)(#)\\s(?=[[a-z0-9_\\x{7f}-\\x{ff},. \\t?!-][^\\x{00}-\\x{7f}]]*$)",beginCaptures:{1:{name:"punctuation.definition.comment.php"}},end:"$",endCaptures:{0:{name:"punctuation.definition.comment.php"}},name:"comment.line.number-sign.php"}]},{begin:"(?i)(<<<)\\s*'([a-z_\\x{7f}-\\x{ff}]+[a-z0-9_\\x{7f}-\\x{ff}]*)'(\\s*)",beginCaptures:{1:{name:"punctuation.definition.string.php"},2:{name:"keyword.operator.nowdoc.php"},3:{name:"invalid.illegal.trailing-whitespace.php"}},end:"^(\\2)\\b",endCaptures:{1:{name:"keyword.operator.nowdoc.php"}}}]},numbers:{patterns:[{match:"0[xX][0-9a-fA-F]+",name:"constant.numeric.hex.php"},{match:"0[bB][01]+",name:"constant.numeric.binary.php"},{match:"0[0-7]+",name:"constant.numeric.octal.php"},{captures:{1:{name:"punctuation.separator.decimal.period.php"},2:{name:"punctuation.separator.decimal.period.php"}},match:`(?x)
(?:
[0-9]*(\\.)[0-9]+(?:[eE][+-]?[0-9]+)?|
[0-9]+(\\.)[0-9]*(?:[eE][+-]?[0-9]+)?|
[0-9]+[eE][+-]?[0-9]+
)`,name:"constant.numeric.decimal.php"},{match:"0|[1-9][0-9]*",name:"constant.numeric.decimal.php"}]},object:{patterns:[{begin:"(->)(\\$?{)",beginCaptures:{1:{name:"keyword.operator.class.php"},2:{name:"punctuation.definition.variable.php"}},end:"}",endCaptures:{0:{name:"punctuation.definition.variable.php"}},patterns:[{include:"#language"}]},{begin:"(?i)(->)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(\\()",beginCaptures:{1:{name:"keyword.operator.class.php"},2:{name:"entity.name.function.php"},3:{name:"punctuation.definition.arguments.begin.bracket.round.php"}},end:"\\)|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.arguments.end.bracket.round.php"}},name:"meta.method-call.php",patterns:[{include:"#language"}]},{captures:{1:{name:"keyword.operator.class.php"},2:{name:"variable.other.property.php"},3:{name:"punctuation.definition.variable.php"}},match:"(?i)(->)((\\$+)?[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?"}]},"parameter-default-types":{patterns:[{include:"#strings"},{include:"#numbers"},{include:"#string-backtick"},{include:"#variables"},{match:"=>",name:"keyword.operator.key.php"},{match:"=",name:"keyword.operator.assignment.php"},{match:"&(?=\\s*\\$)",name:"storage.modifier.reference.php"},{begin:"(array)\\s*(\\()",beginCaptures:{1:{name:"support.function.construct.php"},2:{name:"punctuation.definition.array.begin.bracket.round.php"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.array.end.bracket.round.php"}},name:"meta.array.php",patterns:[{include:"#parameter-default-types"}]},{include:"#instantiation"},{begin:`(?xi)
(?=[a-z0-9_\\x{7f}-\\x{ff}\\\\]+(::)
([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?
)`,end:"(?i)(::)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?",endCaptures:{1:{name:"keyword.operator.class.php"},2:{name:"constant.other.class.php"}},patterns:[{include:"#class-name"}]},{include:"#constants"}]},php_doc:{patterns:[{match:"^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)",name:"invalid.illegal.missing-asterisk.phpdoc.php"},{captures:{1:{name:"keyword.other.phpdoc.php"},3:{name:"storage.modifier.php"},4:{name:"invalid.illegal.wrong-access-type.phpdoc.php"}},match:"^\\s*\\*\\s*(@access)\\s+((public|private|protected)|(.+))\\s*$"},{captures:{1:{name:"keyword.other.phpdoc.php"},2:{name:"markup.underline.link.php"}},match:"(@xlink)\\s+(.+)\\s*$"},{begin:"(@(?:global|param|property(-(read|write))?|return|throws|var))\\s+(?=[A-Za-z_\\x{7f}-\\x{ff}\\\\]|\\()",beginCaptures:{1:{name:"keyword.other.phpdoc.php"}},contentName:"meta.other.type.phpdoc.php",end:"(?=\\s|\\*/)",patterns:[{include:"#php_doc_types_array_multiple"},{include:"#php_doc_types_array_single"},{include:"#php_doc_types"}]},{match:`(?x)
@
(
api|abstract|author|category|copyright|example|global|inherit[Dd]oc|internal|
license|link|method|property(-(read|write))?|package|param|return|see|since|source|
static|subpackage|throws|todo|var|version|uses|deprecated|final|ignore
)\\b`,name:"keyword.other.phpdoc.php"},{captures:{1:{name:"keyword.other.phpdoc.php"}},match:"{(@(link|inherit[Dd]oc)).+?}",name:"meta.tag.inline.phpdoc.php"}]},php_doc_types:{captures:{0:{patterns:[{match:`(?x)\\b
(string|integer|int|boolean|bool|float|double|object|mixed
|array|resource|void|null|callback|false|true|self)\\b`,name:"keyword.other.type.php"},{include:"#class-name"},{match:"\\|",name:"punctuation.separator.delimiter.php"}]}},match:"(?i)[a-z_\\x{7f}-\\x{ff}\\\\][a-z0-9_\\x{7f}-\\x{ff}\\\\]*(\\|[a-z_\\x{7f}-\\x{ff}\\\\][a-z0-9_\\x{7f}-\\x{ff}\\\\]*)*"},php_doc_types_array_multiple:{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.type.begin.bracket.round.phpdoc.php"}},end:"(\\))(\\[\\])|(?=\\*/)",endCaptures:{1:{name:"punctuation.definition.type.end.bracket.round.phpdoc.php"},2:{name:"keyword.other.array.phpdoc.php"}},patterns:[{include:"#php_doc_types_array_multiple"},{include:"#php_doc_types_array_single"},{include:"#php_doc_types"},{match:"\\|",name:"punctuation.separator.delimiter.php"}]},php_doc_types_array_single:{captures:{1:{patterns:[{include:"#php_doc_types"}]},2:{name:"keyword.other.array.phpdoc.php"}},match:"(?i)([a-z_\\x{7f}-\\x{ff}\\\\][a-z0-9_\\x{7f}-\\x{ff}\\\\]*)(\\[\\])"},"regex-double-quoted":{begin:'"/(?=(\\\\.|[^"/])++/[imsxeADSUXu]*")',beginCaptures:{0:{name:"punctuation.definition.string.begin.php"}},end:'(/)([imsxeADSUXu]*)(")',endCaptures:{0:{name:"punctuation.definition.string.end.php"}},name:"string.regexp.double-quoted.php",patterns:[{match:"(\\\\){1,2}[.$^\\[\\]{}]",name:"constant.character.escape.regex.php"},{include:"#interpolation"},{captures:{1:{name:"punctuation.definition.arbitrary-repetition.php"},3:{name:"punctuation.definition.arbitrary-repetition.php"}},match:"({)\\d+(,\\d+)?(})",name:"string.regexp.arbitrary-repetition.php"},{begin:"\\[(?:\\^?\\])?",captures:{0:{name:"punctuation.definition.character-class.php"}},end:"\\]",name:"string.regexp.character-class.php",patterns:[{include:"#interpolation"}]},{match:"[$^+*]",name:"keyword.operator.regexp.php"}]},"regex-single-quoted":{begin:"'/(?=(\\\\(?:\\\\(?:\\\\[\\\\']?|[^'])|.)|[^'/])++/[imsxeADSUXu]*')",beginCaptures:{0:{name:"punctuation.definition.string.begin.php"}},end:"(/)([imsxeADSUXu]*)(')",endCaptures:{0:{name:"punctuation.definition.string.end.php"}},name:"string.regexp.single-quoted.php",patterns:[{include:"#single_quote_regex_escape"},{captures:{1:{name:"punctuation.definition.arbitrary-repetition.php"},3:{name:"punctuation.definition.arbitrary-repetition.php"}},match:"({)\\d+(,\\d+)?(})",name:"string.regexp.arbitrary-repetition.php"},{begin:"\\[(?:\\^?\\])?",captures:{0:{name:"punctuation.definition.character-class.php"}},end:"\\]",name:"string.regexp.character-class.php"},{match:"[$^+*]",name:"keyword.operator.regexp.php"}]},"scope-resolution":{patterns:[{captures:{1:{patterns:[{match:"\\b(self|static|parent)\\b",name:"storage.type.php"},{match:"\\w+",name:"entity.name.class.php"},{include:"#class-name"},{include:"#variable-name"}]}},match:"(?i)\\b([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)(?=\\s*::)"},{begin:"(?i)(::)\\s*([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(\\()",beginCaptures:{1:{name:"keyword.operator.class.php"},2:{name:"entity.name.function.php"},3:{name:"punctuation.definition.arguments.begin.bracket.round.php"}},end:"\\)|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.arguments.end.bracket.round.php"}},name:"meta.method-call.static.php",patterns:[{include:"#language"}]},{captures:{1:{name:"keyword.operator.class.php"},2:{name:"keyword.other.class.php"}},match:"(?i)(::)\\s*(class)\\b"},{captures:{1:{name:"keyword.operator.class.php"},2:{name:"variable.other.class.php"},3:{name:"punctuation.definition.variable.php"},4:{name:"constant.other.class.php"}},match:`(?xi)
(::)\\s*
(?:
((\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
|
([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)
)?`}]},single_quote_regex_escape:{match:"\\\\(?:\\\\(?:\\\\[\\\\']?|[^'])|.)",name:"constant.character.escape.php"},"sql-string-double-quoted":{begin:'"\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER|AND)\\b)',beginCaptures:{0:{name:"punctuation.definition.string.begin.php"}},contentName:"source.sql.embedded.php",end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.php"}},name:"string.quoted.double.sql.php",patterns:[{captures:{1:{name:"punctuation.definition.comment.sql"}},match:'(#)(\\\\"|[^"])*(?="|$)',name:"comment.line.number-sign.sql"},{captures:{1:{name:"punctuation.definition.comment.sql"}},match:'(--)(\\\\"|[^"])*(?="|$)',name:"comment.line.double-dash.sql"},{match:"\\\\[\\\\\"`']",name:"constant.character.escape.php"},{match:`'(?=((\\\\')|[^'"])*("|$))`,name:"string.quoted.single.unclosed.sql"},{match:'`(?=((\\\\`)|[^`"])*("|$))',name:"string.quoted.other.backtick.unclosed.sql"},{begin:"'",end:"'",name:"string.quoted.single.sql",patterns:[{include:"#interpolation"}]},{begin:"`",end:"`",name:"string.quoted.other.backtick.sql",patterns:[{include:"#interpolation"}]},{include:"#interpolation"},{include:"source.sql"}]},"sql-string-single-quoted":{begin:"'\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER|AND)\\b)",beginCaptures:{0:{name:"punctuation.definition.string.begin.php"}},contentName:"source.sql.embedded.php",end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.php"}},name:"string.quoted.single.sql.php",patterns:[{captures:{1:{name:"punctuation.definition.comment.sql"}},match:"(#)(\\\\'|[^'])*(?='|$)",name:"comment.line.number-sign.sql"},{captures:{1:{name:"punctuation.definition.comment.sql"}},match:"(--)(\\\\'|[^'])*(?='|$)",name:"comment.line.double-dash.sql"},{match:"\\\\[\\\\'`\"]",name:"constant.character.escape.php"},{match:"`(?=((\\\\`)|[^`'])*('|$))",name:"string.quoted.other.backtick.unclosed.sql"},{match:`"(?=((\\\\")|[^"'])*('|$))`,name:"string.quoted.double.unclosed.sql"},{include:"source.sql"}]},"string-backtick":{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.php"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.php"}},name:"string.interpolated.php",patterns:[{match:"\\\\.",name:"constant.character.escape.php"},{include:"#interpolation"}]},"string-double-quoted":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.php"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.php"}},name:"string.quoted.double.php",patterns:[{include:"#interpolation"}]},"string-single-quoted":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.php"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.php"}},name:"string.quoted.single.php",patterns:[{match:"\\\\[\\\\']",name:"constant.character.escape.php"}]},strings:{patterns:[{include:"#regex-double-quoted"},{include:"#sql-string-double-quoted"},{include:"#string-double-quoted"},{include:"#regex-single-quoted"},{include:"#sql-string-single-quoted"},{include:"#string-single-quoted"}]},support:{patterns:[{match:`(?xi)
\\b
apc_(
store|sma_info|compile_file|clear_cache|cas|cache_info|inc|dec|define_constants|delete(_file)?|
exists|fetch|load_constants|add|bin_(dump|load)(file)?
)\\b`,name:"support.function.apc.php"},{match:`(?xi)\\b
(
shuffle|sizeof|sort|next|nat(case)?sort|count|compact|current|in_array|usort|uksort|uasort|
pos|prev|end|each|extract|ksort|key(_exists)?|krsort|list|asort|arsort|rsort|reset|range|
array(_(shift|sum|splice|search|slice|chunk|change_key_case|count_values|column|combine|
(diff|intersect)(_(u)?(key|assoc))?|u(diff|intersect)(_(u)?assoc)?|unshift|unique|
pop|push|pad|product|values|keys|key_exists|filter|fill(_keys)?|flip|walk(_recursive)?|
reduce|replace(_recursive)?|reverse|rand|multisort|merge(_recursive)?|map)?)
)\\b`,name:"support.function.array.php"},{match:`(?xi)\\b
(
show_source|sys_getloadavg|sleep|highlight_(file|string)|constant|connection_(aborted|status)|
time_(nanosleep|sleep_until)|ignore_user_abort|die|define(d)?|usleep|uniqid|unpack|__halt_compiler|
php_(check_syntax|strip_whitespace)|pack|eval|exit|get_browser
)\\b`,name:"support.function.basic_functions.php"},{match:"(?i)\\bbc(scale|sub|sqrt|comp|div|pow(mod)?|add|mod|mul)\\b",name:"support.function.bcmath.php"},{match:"(?i)\\bblenc_encrypt\\b",name:"support.function.blenc.php"},{match:"(?i)\\bbz(compress|close|open|decompress|errstr|errno|error|flush|write|read)\\b",name:"support.function.bz2.php"},{match:`(?xi)\\b
(
(French|Gregorian|Jewish|Julian)ToJD|cal_(to_jd|info|days_in_month|from_jd)|unixtojd|
jdto(unix|jewish)|easter_(date|days)|JD(MonthName|To(Gregorian|Julian|French)|DayOfWeek)
)\\b`,name:"support.function.calendar.php"},{match:`(?xi)\\b
(
class_alias|all_user_method(_array)?|is_(a|subclass_of)|__autoload|(class|interface|method|property|trait)_exists|
get_(class(_(vars|methods))?|(called|parent)_class|object_vars|declared_(classes|interfaces|traits))
)\\b`,name:"support.function.classobj.php"},{match:`(?xi)\\b
(
com_(create_guid|print_typeinfo|event_sink|load_typelib|get_active_object|message_pump)|
variant_(sub|set(_type)?|not|neg|cast|cat|cmp|int|idiv|imp|or|div|date_(from|to)_timestamp|
pow|eqv|fix|and|add|abs|round|get_type|xor|mod|mul)
)\\b`,name:"support.function.com.php"},{begin:"(?i)\\b(isset|unset|eval|empty|list)\\b",name:"support.function.construct.php"},{match:"(?i)\\b(print|echo)\\b",name:"support.function.construct.output.php"},{match:"(?i)\\bctype_(space|cntrl|digit|upper|punct|print|lower|alnum|alpha|graph|xdigit)\\b",name:"support.function.ctype.php"},{match:`(?xi)\\b
curl_(
share_(close|init|setopt)|strerror|setopt(_array)?|copy_handle|close|init|unescape|pause|escape|
errno|error|exec|version|file_create|reset|getinfo|
multi_(strerror|setopt|select|close|init|info_read|(add|remove)_handle|getcontent|exec)
)\\b`,name:"support.function.curl.php"},{match:`(?xi)\\b
(
strtotime|str[fp]time|checkdate|time|timezone_name_(from_abbr|get)|idate|
timezone_((location|offset|transitions|version)_get|(abbreviations|identifiers)_list|open)|
date(_(sun(rise|set)|sun_info|sub|create(_(immutable_)?from_format)?|timestamp_(get|set)|timezone_(get|set)|time_set|
isodate_set|interval_(create_from_date_string|format)|offset_get|diff|default_timezone_(get|set)|date_set|
parse(_from_format)?|format|add|get_last_errors|modify))?|
localtime|get(date|timeofday)|gm(strftime|date|mktime)|microtime|mktime
)\\b`,name:"support.function.datetime.php"},{match:"(?i)\\bdba_(sync|handlers|nextkey|close|insert|optimize|open|delete|popen|exists|key_split|firstkey|fetch|list|replace)\\b",name:"support.function.dba.php"},{match:"(?i)\\bdbx_(sort|connect|compare|close|escape_string|error|query|fetch_row)\\b",name:"support.function.dbx.php"},{match:"(?i)\\b(scandir|chdir|chroot|closedir|opendir|dir|rewinddir|readdir|getcwd)\\b",name:"support.function.dir.php"},{match:`(?xi)\\b
eio_(
sync(fs)?|sync_file_range|symlink|stat(vfs)?|sendfile|set_min_parallel|set_max_(idle|poll_(reqs|time)|parallel)|
seek|n(threads|op|pending|reqs|ready)|chown|chmod|custom|close|cancel|truncate|init|open|dup2|unlink|utime|poll|
event_loop|f(sync|stat(vfs)?|chown|chmod|truncate|datasync|utime|allocate)|write|lstat|link|rename|realpath|
read(ahead|dir|link)?|rmdir|get_(event_stream|last_error)|grp(_(add|cancel|limit))?|mknod|mkdir|busy
)\\b`,name:"support.function.eio.php"},{match:`(?xi)\\b
enchant_(
dict_(store_replacement|suggest|check|is_in_session|describe|quick_check|add_to_(personal|session)|get_error)|
broker_(set_ordering|init|dict_exists|describe|free(_dict)?|list_dicts|request_(pwl_)?dict|get_error)
)\\b`,name:"support.function.enchant.php"},{match:"(?i)\\bsplit(i)?|sql_regcase|ereg(i)?(_replace)?\\b",name:"support.function.ereg.php"},{match:"(?i)\\b((restore|set)_(error_handler|exception_handler)|trigger_error|debug_(print_)?backtrace|user_error|error_(log|reporting|get_last))\\b",name:"support.function.errorfunc.php"},{match:"(?i)\\bshell_exec|system|passthru|proc_(nice|close|terminate|open|get_status)|escapeshell(arg|cmd)|exec\\b",name:"support.function.exec.php"},{match:"(?i)\\b(exif_(thumbnail|tagname|imagetype|read_data)|read_exif_data)\\b",name:"support.function.exif.php"},{match:`(?xi)\\b
fann_(
(duplicate|length|merge|shuffle|subset)_train_data|scale_(train(_data)?|(input|output)(_train_data)?)|
set_(scaling_params|sarprop_(step_error_(shift|threshold_factor)|temperature|weight_decay_shift)|
cascade_(num_candidate_groups|candidate_(change_fraction|limit|stagnation_epochs)|
output_(change_fraction|stagnation_epochs)|weight_multiplier|activation_(functions|steepnesses)|
(max|min)_(cand|out)_epochs)|
callback|training_algorithm|train_(error|stop)_function|(input|output)_scaling_params|error_log|
quickprop_(decay|mu)|weight(_array)?|learning_(momentum|rate)|bit_fail_limit|
activation_(function|steepness)(_(hidden|layer|output))?|
rprop_((decrease|increase)_factor|delta_(max|min|zero)))|
save(_train)?|num_(input|output)_train_data|copy|clear_scaling_params|cascadetrain_on_(file|data)|
create_((sparse|shortcut|standard)(_array)?|train(_from_callback)?|from_file)|
test(_data)?|train(_(on_(file|data)|epoch))?|init_weights|descale_(input|output|train)|destroy(_train)?|
print_error|run|reset_(MSE|err(no|str))|read_train_from_file|randomize_weights|
get_(sarprop_(step_error_(shift|threshold_factor)|temperature|weight_decay_shift)|num_(input|output|layers)|
network_type|MSE|connection_(array|rate)|bias_array|bit_fail(_limit)?|
cascade_(num_(candidates|candidate_groups)|(candidate|output)_(change_fraction|limit|stagnation_epochs)|
weight_multiplier|activation_(functions|steepnesses)(_count)?|(max|min)_(cand|out)_epochs)|
total_(connections|neurons)|training_algorithm|train_(error|stop)_function|err(no|str)|
quickprop_(decay|mu)|learning_(momentum|rate)|layer_array|activation_(function|steepness)|
rprop_((decrease|increase)_factor|delta_(max|min|zero)))
)\\b`,name:"support.function.fann.php"},{match:`(?xi)\\b
(
symlink|stat|set_file_buffer|chown|chgrp|chmod|copy|clearstatcache|touch|tempnam|tmpfile|
is_(dir|(uploaded_)?file|executable|link|readable|writ(e)?able)|disk_(free|total)_space|diskfreespace|
dirname|delete|unlink|umask|pclose|popen|pathinfo|parse_ini_(file|string)|fscanf|fstat|fseek|fnmatch|
fclose|ftell|ftruncate|file(size|[acm]time|type|inode|owner|perms|group)?|file_(exists|(get|put)_contents)|
f(open|puts|putcsv|passthru|eof|flush|write|lock|read|gets(s)?|getc(sv)?)|lstat|lchown|lchgrp|link(info)?|
rename|rewind|read(file|link)|realpath(_cache_(get|size))?|rmdir|glob|move_uploaded_file|mkdir|basename
)\\b`,name:"support.function.file.php"},{match:"(?i)\\b(finfo_(set_flags|close|open|file|buffer)|mime_content_type)\\b",name:"support.function.fileinfo.php"},{match:"(?i)\\bfilter_(has_var|input(_array)?|id|var(_array)?|list)\\b",name:"support.function.filter.php"},{match:"(?i)\\bfastcgi_finish_request\\b",name:"support.function.fpm.php"},{match:"(?i)\\b(call_user_(func|method)(_array)?|create_function|unregister_tick_function|forward_static_call(_array)?|function_exists|func_(num_args|get_arg(s)?)|register_(shutdown|tick)_function|get_defined_functions)\\b",name:"support.function.funchand.php"},{match:"(?i)\\b((n)?gettext|textdomain|d((n)?gettext|c(n)?gettext)|bind(textdomain|_textdomain_codeset))\\b",name:"support.function.gettext.php"},{match:`(?xi)\\b
gmp_(
scan[01]|strval|sign|sub|setbit|sqrt(rem)?|hamdist|neg|nextprime|com|clrbit|cmp|testbit|
intval|init|invert|import|or|div(exact)?|div_(q|qr|r)|jacobi|popcount|pow(m)?|perfect_square|
prob_prime|export|fact|legendre|and|add|abs|root(rem)?|random(_(bits|range))?|gcd(ext)?|xor|mod|mul
)\\b`,name:"support.function.gmp.php"},{match:"(?i)\\bhash(_(hmac(_file)?|copy|init|update(_(file|stream))?|pbkdf2|equals|file|final|algos))?\\b",name:"support.function.hash.php"},{match:`(?xi)\\b
(
http_(support|send_(status|stream|content_(disposition|type)|data|file|last_modified)|head|
negotiate_(charset|content_type|language)|chunked_decode|cache_(etag|last_modified)|throttle|
inflate|deflate|date|post_(data|fields)|put_(data|file|stream)|persistent_handles_(count|clean|ident)|
parse_(cookie|headers|message|params)|redirect|request(_(method_(exists|name|(un)?register)|body_encode))?|
get(_request_(headers|body(_stream)?))?|match_(etag|modified|request_header)|build_(cookie|str|url))|
ob_(etag|deflate|inflate)handler
)\\b`,name:"support.function.http.php"},{match:"(?i)\\b(iconv(_(str(pos|len|rpos)|substr|(get|set)_encoding|mime_(decode(_headers)?|encode)))?|ob_iconv_handler)\\b",name:"support.function.iconv.php"},{match:"(?i)\\biis_((start|stop)_(service|server)|set_(script_map|server_rights|dir_security|app_settings)|(add|remove)_server|get_(script_map|service_state|server_(rights|by_(comment|path))|dir_security))\\b",name:"support.function.iisfunc.php"},{match:`(?xi)\\b
(
iptc(embed|parse)|(jpeg|png)2wbmp|gd_info|getimagesize(fromstring)?|
image(s[xy]|scale|(char|string)(up)?|set(style|thickness|tile|interpolation|pixel|brush)|savealpha|
convolution|copy(resampled|resized|merge(gray)?)?|colors(forindex|total)|
color(set|closest(alpha|hwb)?|transparent|deallocate|(allocate|exact|resolve)(alpha)?|at|match)|
crop(auto)?|create(truecolor|from(string|jpeg|png|wbmp|webp|gif|gd(2(part)?)?|xpm|xbm))?|
types|ttf(bbox|text)|truecolortopalette|istruecolor|interlace|2wbmp|destroy|dashedline|jpeg|
_type_to_(extension|mime_type)|ps(slantfont|text|(encode|extend|free|load)font|bbox)|png|polygon|
palette(copy|totruecolor)|ellipse|ft(text|bbox)|filter|fill|filltoborder|
filled(arc|ellipse|polygon|rectangle)|font(height|width)|flip|webp|wbmp|line|loadfont|layereffect|
antialias|affine(matrix(concat|get))?|alphablending|arc|rotate|rectangle|gif|gd(2)?|gammacorrect|
grab(screen|window)|xbm)
)\\b`,name:"support.function.image.php"},{match:`(?xi)\\b
(
sys_get_temp_dir|set_(time_limit|include_path|magic_quotes_runtime)|cli_(get|set)_process_title|
ini_(alter|get(_all)?|restore|set)|zend_(thread_id|version|logo_guid)|dl|php(credits|info|version)|
php_(sapi_name|ini_(scanned_files|loaded_file)|uname|logo_guid)|putenv|extension_loaded|version_compare|
assert(_options)?|restore_include_path|gc_(collect_cycles|disable|enable(d)?)|getopt|
get_(cfg_var|current_user|defined_constants|extension_funcs|include_path|included_files|loaded_extensions|
magic_quotes_(gpc|runtime)|required_files|resources)|
get(env|lastmod|rusage|my(inode|[gup]id))|
memory_get_(peak_)?usage|main|magic_quotes_runtime
)\\b`,name:"support.function.info.php"},{match:`(?xi)\\b
ibase_(
set_event_handler|service_(attach|detach)|server_info|num_(fields|params)|name_result|connect|
commit(_ret)?|close|trans|delete_user|drop_db|db_info|pconnect|param_info|prepare|err(code|msg)|
execute|query|field_info|fetch_(assoc|object|row)|free_(event_handler|query|result)|wait_event|
add_user|affected_rows|rollback(_ret)?|restore|gen_id|modify_user|maintain_db|backup|
blob_(cancel|close|create|import|info|open|echo|add|get)
)\\b`,name:"support.function.interbase.php"},{match:`(?xi)\\b
(
normalizer_(normalize|is_normalized)|idn_to_(unicode|utf8|ascii)|
numfmt_(set_(symbol|(text_)?attribute|pattern)|create|(parse|format)(_currency)?|
get_(symbol|(text_)?attribute|pattern|error_(code|message)|locale))|
collator_(sort(_with_sort_keys)?|set_(attribute|strength)|compare|create|asort|
get_(strength|sort_key|error_(code|message)|locale|attribute))|
transliterator_(create(_(inverse|from_rules))?|transliterate|list_ids|get_error_(code|message))|
intl(cal|tz)_get_error_(code|message)|intl_(is_failure|error_name|get_error_(code|message))|
datefmt_(set_(calendar|lenient|pattern|timezone(_id)?)|create|is_lenient|parse|format(_object)?|localtime|
get_(calendar(_object)?|time(type|zone(_id)?)|datetype|pattern|error_(code|message)|locale))|
locale_(set_default|compose|canonicalize|parse|filter_matches|lookup|accept_from_http|
get_(script|display_(script|name|variant|language|region)|default|primary_language|keywords|all_variants|region))|
resourcebundle_(create|count|locales|get(_(error_(code|message)))?)|
grapheme_(str(i?str|r?i?pos|len)|substr|extract)|
msgfmt_(set_pattern|create|(format|parse)(_message)?|get_(pattern|error_(code|message)|locale))
)\\b`,name:"support.function.intl.php"},{match:"(?i)\\bjson_(decode|encode|last_error(_msg)?)\\b",name:"support.function.json.php"},{match:`(?xi)\\b
ldap_(
start|tls|sort|search|sasl_bind|set_(option|rebind_proc)|(first|next)_(attribute|entry|reference)|
connect|control_paged_result(_response)?|count_entries|compare|close|t61_to_8859|8859_to_t61|
dn2ufn|delete|unbind|parse_(reference|result)|escape|errno|err2str|error|explode_dn|bind|
free_result|list|add|rename|read|get_(option|dn|entries|values(_len)?|attributes)|modify(_batch)?|
mod_(add|del|replace)
)\\b`,name:"support.function.ldap.php"},{match:"(?i)\\blibxml_(set_(streams_context|external_entity_loader)|clear_errors|disable_entity_loader|use_internal_errors|get_(errors|last_error))\\b",name:"support.function.libxml.php"},{match:"(?i)\\b(ezmlm_hash|mail)\\b",name:"support.function.mail.php"},{match:`(?xi)\\b
(
(a)?(cos|sin|tan)(h)?|sqrt|srand|hypot|hexdec|ceil|is_(nan|(in)?finite)|octdec|dec(hex|oct|bin)|deg2rad|
pi|pow|exp(m1)?|floor|fmod|lcg_value|log(1(p|0))?|atan2|abs|round|rand|rad2deg|getrandmax|
mt_(srand|rand|getrandmax)|max|min|bindec|base_convert
)\\b`,name:"support.function.math.php"},{match:`(?xi)\\b
mb_(
str(cut|str|to(lower|upper)|istr|ipos|imwidth|pos|width|len|rchr|richr|ripos|rpos)|
substitute_character|substr(_count)?|split|send_mail|http_(input|output)|check_encoding|
convert_(case|encoding|kana|variables)|internal_encoding|output_handler|decode_(numericentity|mimeheader)|
detect_(encoding|order)|parse_str|preferred_mime_name|encoding_aliases|encode_(numericentity|mimeheader)|
ereg(i(_replace)?)?|ereg_(search(_(get(pos|regs)|init|regs|(set)?pos))?|replace(_callback)?|match)|
list_encodings|language|regex_(set_options|encoding)|get_info
)\\b`,name:"support.function.mbstring.php"},{match:`(?xi)\\b
(
mcrypt_(
cfb|create_iv|cbc|ofb|decrypt|encrypt|ecb|list_(algorithms|modes)|generic(_((de)?init|end))?|
enc_(self_test|is_block_(algorithm|algorithm_mode|mode)|
get_(supported_key_sizes|(block|iv|key)_size|(algorithms|modes)_name))|
get_(cipher_name|(block|iv|key)_size)|
module_(close|self_test|is_block_(algorithm|algorithm_mode|mode)|open|
get_(supported_key_sizes|algo_(block|key)_size)))|
mdecrypt_generic
)\\b`,name:"support.function.mcrypt.php"},{match:"(?i)\\bmemcache_debug\\b",name:"support.function.memcache.php"},{match:"(?i)\\bmhash(_(count|keygen_s2k|get_(hash_name|block_size)))?\\b",name:"support.function.mhash.php"},{match:"(?i)\\b(log_(cmd_(insert|delete|update)|killcursor|write_batch|reply|getmore)|bson_(decode|encode))\\b",name:"support.function.mongo.php"},{match:`(?xi)\\b
mysql_(
stat|set_charset|select_db|num_(fields|rows)|connect|client_encoding|close|create_db|escape_string|
thread_id|tablename|insert_id|info|data_seek|drop_db|db_(name|query)|unbuffered_query|pconnect|ping|
errno|error|query|field_(seek|name|type|table|flags|len)|fetch_(object|field|lengths|assoc|array|row)|
free_result|list_(tables|dbs|processes|fields)|affected_rows|result|real_escape_string|
get_(client|host|proto|server)_info
)\\b`,name:"support.function.mysql.php"},{match:`(?xi)\\b
mysqli_(
ssl_set|store_result|stat|send_(query|long_data)|set_(charset|opt|local_infile_(default|handler))|
stmt_(store_result|send_long_data|next_result|close|init|data_seek|prepare|execute|fetch|free_result|
attr_(get|set)|result_metadata|reset|get_(result|warnings)|more_results|bind_(param|result))|
select_db|slave_query|savepoint|next_result|change_user|character_set_name|connect|commit|
client_encoding|close|thread_safe|init|options|(enable|disable)_(reads_from_master|rpl_parse)|
dump_debug_info|debug|data_seek|use_result|ping|poll|param_count|prepare|escape_string|execute|
embedded_server_(start|end)|kill|query|field_seek|free_result|autocommit|rollback|report|refresh|
fetch(_(object|fields|field(_direct)?|assoc|all|array|row))?|rpl_(parse_enabled|probe|query_type)|
release_savepoint|reap_async_query|real_(connect|escape_string|query)|more_results|multi_query|
get_(charset|connection_stats|client_(stats|info|version)|cache_stats|warnings|links_stats|metadata)|
master_query|bind_(param|result)|begin_transaction
)\\b`,name:"support.function.mysqli.php"},{match:"(?i)\\bmysqlnd_memcache_(set|get_config)\\b",name:"support.function.mysqlnd-memcache.php"},{match:"(?i)\\bmysqlnd_ms_(set_(user_pick_server|qos)|dump_servers|query_is_select|fabric_select_(shard|global)|get_(stats|last_(used_connection|gtid))|xa_(commit|rollback|gc|begin)|match_wild)\\b",name:"support.function.mysqlnd-ms.php"},{match:"(?i)\\bmysqlnd_qc_(set_(storage_handler|cache_condition|is_select|user_handlers)|clear_cache|get_(normalized_query_trace_log|core_stats|cache_info|query_trace_log|available_handlers))\\b",name:"support.function.mysqlnd-qc.php"},{match:"(?i)\\bmysqlnd_uh_(set_(statement|connection)_proxy|convert_to_mysqlnd)\\b",name:"support.function.mysqlnd-uh.php"},{match:`(?xi)\\b
(
syslog|socket_(set_(blocking|timeout)|get_status)|set(raw)?cookie|http_response_code|openlog|
headers_(list|sent)|header(_(register_callback|remove))?|checkdnsrr|closelog|inet_(ntop|pton)|ip2long|
openlog|dns_(check_record|get_(record|mx))|define_syslog_variables|(p)?fsockopen|long2ip|
get(servby(name|port)|host(name|by(name(l)?|addr))|protoby(name|number)|mxrr)
)\\b`,name:"support.function.network.php"},{match:"(?i)\\bnsapi_(virtual|response_headers|request_headers)\\b",name:"support.function.nsapi.php"},{match:`(?xi)\\b
(
oci(statementtype|setprefetch|serverversion|savelob(file)?|numcols|new(collection|cursor|descriptor)|nlogon|
column(scale|size|name|type(raw)?|isnull|precision)|coll(size|trim|assign(elem)?|append|getelem|max)|commit|
closelob|cancel|internaldebug|definebyname|plogon|parse|error|execute|fetch(statement|into)?|
free(statement|collection|cursor|desc)|write(temporarylob|lobtofile)|loadlob|log(on|off)|rowcount|rollback|
result|bindbyname)|
oci_(statement_type|set_(client_(info|identifier)|prefetch|edition|action|module_name)|server_version|
num_(fields|rows)|new_(connect|collection|cursor|descriptor)|connect|commit|client_version|close|cancel|
internal_debug|define_by_name|pconnect|password_change|parse|error|execute|bind_(array_)?by_name|
field_(scale|size|name|type(_raw)?|is_null|precision)|fetch(_(object|assoc|all|array|row))?|
free_(statement|descriptor)|lob_(copy|is_equal)|rollback|result|get_implicit_resultset)
)\\b`,name:"support.function.oci8.php"},{match:"(?i)\\bopcache_(compile_file|invalidate|reset|get_(status|configuration))\\b",name:"support.function.opcache.php"},{match:`(?xi)\\b
openssl_(
sign|spki_(new|export(_challenge)?|verify)|seal|csr_(sign|new|export(_to_file)?|get_(subject|public_key))|
cipher_iv_length|open|dh_compute_key|digest|decrypt|public_(decrypt|encrypt)|encrypt|error_string|
pkcs12_(export(_to_file)?|read)|pkcs7_(sign|decrypt|encrypt|verify)|verify|free_key|random_pseudo_bytes|
pkey_(new|export(_to_file)?|free|get_(details|public|private))|private_(decrypt|encrypt)|pbkdf2|
get_((cipher|md)_methods|cert_locations|(public|private)key)|
x509_(check_private_key|checkpurpose|parse|export(_to_file)?|fingerprint|free|read)
)\\b`,name:"support.function.openssl.php"},{match:`(?xi)\\b
(
output_(add_rewrite_var|reset_rewrite_vars)|flush|
ob_(start|clean|implicit_flush|end_(clean|flush)|flush|list_handlers|gzhandler|
get_(status|contents|clean|flush|length|level))
)\\b`,name:"support.function.output.php"},{match:"(?i)\\bpassword_(hash|needs_rehash|verify|get_info)\\b",name:"support.function.password.php"},{match:`(?xi)\\b
pcntl_(
strerror|signal(_dispatch)?|sig(timedwait|procmask|waitinfo)|setpriority|errno|exec|fork|
w(stopsig|termsig|if(stopped|signaled|exited))|wait(pid)?|alarm|getpriority|get_last_error
)\\b`,name:"support.function.pcntl.php"},{match:`(?xi)\\b
pg_(
socket|send_(prepare|execute|query(_params)?)|set_(client_encoding|error_verbosity)|select|host|
num_(fields|rows)|consume_input|connection_(status|reset|busy)|connect(_poll)?|convert|copy_(from|to)|
client_encoding|close|cancel_query|tty|transaction_status|trace|insert|options|delete|dbname|untrace|
unescape_bytea|update|pconnect|ping|port|put_line|parameter_status|prepare|version|query(_params)?|
escape_(string|identifier|literal|bytea)|end_copy|execute|flush|free_result|last_(notice|error|oid)|
field_(size|num|name|type(_oid)?|table|is_null|prtlen)|affected_rows|result_(status|seek|error(_field)?)|
fetch_(object|assoc|all(_columns)?|array|row|result)|get_(notify|pid|result)|meta_data|
lo_(seek|close|create|tell|truncate|import|open|unlink|export|write|read(_all)?)|
)\\b`,name:"support.function.pgsql.php"},{match:"(?i)\\b(virtual|getallheaders|apache_((get|set)env|note|child_terminate|lookup_uri|response_headers|reset_timeout|request_headers|get_(version|modules)))\\b",name:"support.function.php_apache.php"},{match:"(?i)\\bdom_import_simplexml\\b",name:"support.function.php_dom.php"},{match:`(?xi)\\b
ftp_(
ssl_connect|systype|site|size|set_option|nlist|nb_(continue|f?(put|get))|ch(dir|mod)|connect|cdup|close|
delete|put|pwd|pasv|exec|quit|f(put|get)|login|alloc|rename|raw(list)?|rmdir|get(_option)?|mdtm|mkdir
)\\b`,name:"support.function.php_ftp.php"},{match:`(?xi)\\b
imap_(
(create|delete|list|rename|scan)(mailbox)?|status|sort|subscribe|set_quota|set(flag_full|acl)|search|savebody|
num_(recent|msg)|check|close|clearflag_full|thread|timeout|open|header(info)?|headers|append|alerts|reopen|
8bit|unsubscribe|undelete|utf7_(decode|encode)|utf8|uid|ping|errors|expunge|qprint|gc|
fetch(structure|header|text|mime|body)|fetch_overview|lsub|list(scan|subscribed)|last_error|
rfc822_(parse_(headers|adrlist)|write_address)|get(subscribed|acl|mailboxes)|get_quota(root)?|
msgno|mime_header_decode|mail_(copy|compose|move)|mail|mailboxmsginfo|binary|body(struct)?|base64
)\\b`,name:"support.function.php_imap.php"},{match:`(?xi)\\b
mssql_(
select_db|num_(fields|rows)|next_result|connect|close|init|data_seek|pconnect|execute|query|
field_(seek|name|type|length)|fetch_(object|field|assoc|array|row|batch)|free_(statement|result)|
rows_affected|result|guid_string|get_last_message|min_(error|message)_severity|bind
)\\b`,name:"support.function.php_mssql.php"},{match:`(?xi)\\b
odbc_(
statistics|specialcolumns|setoption|num_(fields|rows)|next_result|connect|columns|columnprivileges|commit|
cursor|close(_all)?|tables|tableprivileges|do|data_source|pconnect|primarykeys|procedures|procedurecolumns|
prepare|error(msg)?|exec(ute)?|field_(scale|num|name|type|precision|len)|foreignkeys|free_result|
fetch_(into|object|array|row)|longreadlen|autocommit|rollback|result(_all)?|gettypeinfo|binmode
)\\b`,name:"support.function.php_odbc.php"},{match:"(?i)\\bpreg_(split|quote|filter|last_error|replace(_callback)?|grep|match(_all)?)\\b",name:"support.function.php_pcre.php"},{match:"(?i)\\b(spl_(classes|object_hash|autoload(_(call|unregister|extensions|functions|register))?)|class_(implements|uses|parents)|iterator_(count|to_array|apply))\\b",name:"support.function.php_spl.php"},{match:"(?i)\\bzip_(close|open|entry_(name|compressionmethod|compressedsize|close|open|filesize|read)|read)\\b",name:"support.function.php_zip.php"},{match:`(?xi)\\b
posix_(
strerror|set(s|e?u|[ep]?g)id|ctermid|ttyname|times|isatty|initgroups|uname|errno|kill|access|
get(sid|cwd|uid|pid|ppid|pwnam|pwuid|pgid|pgrp|euid|egid|login|rlimit|gid|grnam|groups|grgid)|
get_last_error|mknod|mkfifo
)\\b`,name:"support.function.posix.php"},{match:"(?i)\\bset(thread|proc)title\\b",name:"support.function.proctitle.php"},{match:`(?xi)\\b
pspell_(
store_replacement|suggest|save_wordlist|new(_(config|personal))?|check|clear_session|
config_(save_repl|create|ignore|(data|dict)_dir|personal|runtogether|repl|mode)|add_to_(session|personal)
)\\b`,name:"support.function.pspell.php"},{match:"(?i)\\breadline(_(completion_function|clear_history|callback_(handler_(install|remove)|read_char)|info|on_new_line|write_history|list_history|add_history|redisplay|read_history))?\\b",name:"support.function.readline.php"},{match:"(?i)\\brecode(_(string|file))?\\b",name:"support.function.recode.php"},{match:"(?i)\\brrd(c_disconnect|_(create|tune|info|update|error|version|first|fetch|last(update)?|restore|graph|xport))\\b",name:"support.function.rrd.php"},{match:`(?xi)\\b
(
shm_((get|has|remove|put)_var|detach|attach|remove)|sem_(acquire|release|remove|get)|ftok|
msg_((get|remove|set|stat)_queue|send|queue_exists|receive)
)\\b`,name:"support.function.sem.php"},{match:`(?xi)\\b
session_(
status|start|set_(save_handler|cookie_params)|save_path|name|commit|cache_(expire|limiter)|
is_registered|id|destroy|decode|unset|unregister|encode|write_close|abort|reset|register(_shutdown)?|
regenerate_id|get_cookie_params|module_name
)\\b`,name:"support.function.session.php"},{match:"(?i)\\bshmop_(size|close|open|delete|write|read)\\b",name:"support.function.shmop.php"},{match:"(?i)\\bsimplexml_(import_dom|load_(string|file))\\b",name:"support.function.simplexml.php"},{match:`(?xi)\\b
(
snmp(walk(oid)?|realwalk|get(next)?|set)|
snmp_(set_(valueretrieval|quick_print|enum_print|oid_(numeric_print|output_format))|read_mib|
get_(valueretrieval|quick_print))|
snmp[23]_(set|walk|real_walk|get(next)?)
)\\b`,name:"support.function.snmp.php"},{match:"(?i)\\b(is_soap_fault|use_soap_error_handler)\\b",name:"support.function.soap.php"},{match:`(?xi)\\b
socket_(
shutdown|strerror|send(to|msg)?|set_((non)?block|option)|select|connect|close|clear_error|bind|
create(_(pair|listen))?|cmsg_space|import_stream|write|listen|last_error|accept|recv(from|msg)?|
read|get(peer|sock)name|get_option
)\\b`,name:"support.function.sockets.php"},{match:`(?xi)\\b
sqlite_(
single_query|seek|has_(more|prev)|num_(fields|rows)|next|changes|column|current|close|
create_(aggregate|function)|open|unbuffered_query|udf_(decode|encode)_binary|popen|prev|
escape_string|error_string|exec|valid|key|query|field_name|factory|
fetch_(string|single|column_types|object|all|array)|lib(encoding|version)|
last_(insert_rowid|error)|array_query|rewind|busy_timeout
)\\b`,name:"support.function.sqlite.php"},{match:`(?xi)\\b
sqlsrv_(
send_stream_data|server_info|has_rows|num_(fields|rows)|next_result|connect|configure|commit|
client_info|close|cancel|prepare|errors|execute|query|field_metadata|fetch(_(array|object))?|
free_stmt|rows_affected|rollback|get_(config|field)|begin_transaction
)\\b`,name:"support.function.sqlsrv.php"},{match:`(?xi)\\b
stats_(
harmonic_mean|covariance|standard_deviation|skew|
cdf_(noncentral_(chisquare|f)|negative_binomial|chisquare|cauchy|t|uniform|poisson|exponential|f|weibull|
logistic|laplace|gamma|binomial|beta)|
stat_(noncentral_t|correlation|innerproduct|independent_t|powersum|percentile|paired_t|gennch|binomial_coef)|
dens_(normal|negative_binomial|chisquare|cauchy|t|pmf_(hypergeometric|poisson|binomial)|exponential|f|
weibull|logistic|laplace|gamma|beta)|
den_uniform|variance|kurtosis|absolute_deviation|
rand_(setall|phrase_to_seeds|ranf|get_seeds|
gen_(noncentral_[ft]|noncenral_chisquare|normal|chisquare|t|int|
i(uniform|poisson|binomial(_negative)?)|exponential|f(uniform)?|gamma|beta))
)\\b`,name:"support.function.stats.php"},{match:`(?xi)\\b
(
set_socket_blocking|
stream_(socket_(shutdown|sendto|server|client|pair|enable_crypto|accept|recvfrom|get_name)|
set_(chunk_size|timeout|(read|write)_buffer|blocking)|select|notification_callback|supports_lock|
context_(set_(option|default|params)|create|get_(options|default|params))|copy_to_stream|is_local|
encoding|filter_(append|prepend|register|remove)|wrapper_((un)?register|restore)|
resolve_include_path|register_wrapper|get_(contents|transports|filters|wrappers|line|meta_data)|
bucket_(new|prepend|append|make_writeable)
)
)\\b`,name:"support.function.streamsfuncs.php"},{match:`(?xi)\\b
(
money_format|md5(_file)?|metaphone|bin2hex|sscanf|sha1(_file)?|
str(str|c?spn|n(at)?(case)?cmp|chr|coll|(case)?cmp|to(upper|lower)|tok|tr|istr|pos|pbrk|len|rchr|ri?pos|rev)|
str_(getcsv|ireplace|pad|repeat|replace|rot13|shuffle|split|word_count)|
strip(c?slashes|os)|strip_tags|similar_text|soundex|substr(_(count|compare|replace))?|setlocale|
html(specialchars(_decode)?|entities)|html_entity_decode|hex2bin|hebrev(c)?|number_format|nl2br|nl_langinfo|
chop|chunk_split|chr|convert_(cyr_string|uu(decode|encode))|count_chars|crypt|crc32|trim|implode|ord|
uc(first|words)|join|parse_str|print(f)?|echo|explode|v?[fs]?printf|quoted_printable_(decode|encode)|
quotemeta|wordwrap|lcfirst|[lr]trim|localeconv|levenshtein|addc?slashes|get_html_translation_table
)\\b`,name:"support.function.string.php"},{match:`(?xi)\\b
sybase_(
set_message_handler|select_db|num_(fields|rows)|connect|close|deadlock_retry_count|data_seek|
unbuffered_query|pconnect|query|field_seek|fetch_(object|field|assoc|array|row)|free_result|
affected_rows|result|get_last_message|min_(client|error|message|server)_severity
)\\b`,name:"support.function.sybase.php"},{match:"(?i)\\b(taint|is_tainted|untaint)\\b",name:"support.function.taint.php"},{match:`(?xi)\\b
(
tidy_((get|set)opt|set_encoding|save_config|config_count|clean_repair|is_(xhtml|xml)|diagnose|
(access|error|warning)_count|load_config|reset_config|(parse|repair)_(string|file)|
get_(status|html(_ver)?|head|config|output|opt_doc|root|release|body))|
ob_tidyhandler
)\\b`,name:"support.function.tidy.php"},{match:"(?i)\\btoken_(name|get_all)\\b",name:"support.function.tokenizer.php"},{match:`(?xi)\\b
trader_(
stoch(f|r|rsi)?|stddev|sin(h)?|sum|sub|set_(compat|unstable_period)|sqrt|sar(ext)?|sma|
ht_(sine|trend(line|mode)|dc(period|phase)|phasor)|natr|cci|cos(h)?|correl|
cdl(shootingstar|shortline|sticksandwich|stalledpattern|spinningtop|separatinglines|
hikkake(mod)?|highwave|homingpigeon|hangingman|harami(cross)?|hammer|concealbabyswall|
counterattack|closingmarubozu|thrusting|tasukigap|takuri|tristar|inneck|invertedhammer|
identical3crows|2crows|onneck|doji(star)?|darkcloudcover|dragonflydoji|unique3river|
upsidegap2crows|3(starsinsouth|inside|outside|whitesoldiers|linestrike|blackcrows)|
piercing|engulfing|evening(doji)?star|kicking(bylength)?|longline|longleggeddoji|
ladderbottom|advanceblock|abandonedbaby|risefall3methods|rickshawman|gapsidesidewhite|
gravestonedoji|xsidegap3methods|morning(doji)?star|mathold|matchinglow|marubozu|
belthold|breakaway)|
ceil|cmo|tsf|typprice|t3|tema|tan(h)?|trix|trima|trange|obv|div|dema|dx|ultosc|ppo|
plus_d[im]|errno|exp|ema|var|kama|floor|wclprice|willr|wma|ln|log10|bop|beta|bbands|
linearreg(_(slope|intercept|angle))?|asin|acos|atan|atr|adosc|ad|add|adx(r)?|apo|avgprice|
aroon(osc)?|rsi|roc|rocp|rocr(100)?|get_(compat|unstable_period)|min(index)?|minus_d[im]|
minmax(index)?|mid(point|price)|mom|mult|medprice|mfi|macd(ext|fix)?|mavp|max(index)?|ma(ma)?
)\\b`,name:"support.function.trader.php"},{match:"(?i)\\buopz_(copy|compose|implement|overload|delete|undefine|extend|function|flags|restore|rename|redefine|backup)\\b",name:"support.function.uopz.php"},{match:"(?i)\\b(http_build_query|(raw)?url(decode|encode)|parse_url|get_(headers|meta_tags)|base64_(decode|encode))\\b",name:"support.function.url.php"},{match:`(?xi)\\b
(
strval|settype|serialize|(bool|double|float)val|debug_zval_dump|intval|import_request_variables|isset|
is_(scalar|string|null|numeric|callable|int(eger)?|object|double|float|long|array|resource|real|bool)|
unset|unserialize|print_r|empty|var_(dump|export)|gettype|get_(defined_vars|resource_type)
)\\b`,name:"support.function.var.php"},{match:"(?i)\\bwddx_(serialize_(value|vars)|deserialize|packet_(start|end)|add_vars)\\b",name:"support.function.wddx.php"},{match:"(?i)\\bxhprof_(sample_)?(disable|enable)\\b",name:"support.function.xhprof.php"},{match:`(?xi)
\\b
(
utf8_(decode|encode)|
xml_(set_((notation|(end|start)_namespace|unparsed_entity)_decl_handler|
(character_data|default|element|external_entity_ref|processing_instruction)_handler|object)|
parse(_into_struct)?|parser_((get|set)_option|create(_ns)?|free)|error_string|
get_(current_((column|line)_number|byte_index)|error_code))
)\\b`,name:"support.function.xml.php"},{match:`(?xi)\\b
xmlrpc_(
server_(call_method|create|destroy|add_introspection_data|register_(introspection_callback|method))|
is_fault|decode(_request)?|parse_method_descriptions|encode(_request)?|(get|set)_type
)\\b`,name:"support.function.xmlrpc.php"},{match:`(?xi)\\b
xmlwriter_(
(end|start|write)_(comment|cdata|dtd(_(attlist|entity|element))?|document|pi|attribute|element)|
(start|write)_(attribute|element)_ns|write_raw|set_indent(_string)?|text|output_memory|open_(memory|uri)|
full_end_element|flush|
)\\b`,name:"support.function.xmlwriter.php"},{match:`(?xi)\\b
(
zlib_(decode|encode|get_coding_type)|readgzfile|
gz(seek|compress|close|tell|inflate|open|decode|deflate|uncompress|puts|passthru|encode|eof|file|
write|rewind|read|getc|getss?)
)\\b`,name:"support.function.zlib.php"},{match:"(?i)\\bis_int(eger)?\\b",name:"support.function.alias.php"}]},switch_statement:{patterns:[{match:"\\s+(?=switch\\b)"},{begin:"\\bswitch\\b(?!\\s*\\(.*\\)\\s*:)",beginCaptures:{0:{name:"keyword.control.switch.php"}},end:"}|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.section.switch-block.end.bracket.curly.php"}},name:"meta.switch-statement.php",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.switch-expression.begin.bracket.round.php"}},end:"\\)|(?=\\?>)",endCaptures:{0:{name:"punctuation.definition.switch-expression.end.bracket.round.php"}},patterns:[{include:"#language"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.definition.section.switch-block.begin.bracket.curly.php"}},end:"(?=}|\\?>)",patterns:[{include:"#language"}]}]}]},"use-inner":{patterns:[{include:"#comments"},{begin:"(?i)\\b(as)\\s+",beginCaptures:{1:{name:"keyword.other.use-as.php"}},end:"(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",endCaptures:{0:{name:"entity.other.alias.php"}}},{include:"#class-name"},{match:",",name:"punctuation.separator.delimiter.php"}]},var_basic:{patterns:[{captures:{1:{name:"punctuation.definition.variable.php"}},match:"(?i)(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\b",name:"variable.other.php"}]},var_global:{captures:{1:{name:"punctuation.definition.variable.php"}},match:"(\\$)((_(COOKIE|FILES|GET|POST|REQUEST))|arg(v|c))\\b",name:"variable.other.global.php"},var_global_safer:{captures:{1:{name:"punctuation.definition.variable.php"}},match:"(\\$)((GLOBALS|_(ENV|SERVER|SESSION)))",name:"variable.other.global.safer.php"},var_language:{captures:{1:{name:"punctuation.definition.variable.php"}},match:"(\\$)this\\b",name:"variable.language.this.php"},"variable-name":{patterns:[{include:"#var_global"},{include:"#var_global_safer"},{captures:{1:{name:"variable.other.php"},2:{name:"punctuation.definition.variable.php"},4:{name:"keyword.operator.class.php"},5:{name:"variable.other.property.php"},6:{name:"punctuation.section.array.begin.php"},7:{name:"constant.numeric.index.php"},8:{name:"variable.other.index.php"},9:{name:"punctuation.definition.variable.php"},10:{name:"string.unquoted.index.php"},11:{name:"punctuation.section.array.end.php"}},match:`(?xi)
((\\$)(?<name>[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*))
(?:
(->)(\\g<name>)
|
(\\[)(?:(\\d+)|((\\$)\\g<name>)|([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*))(\\])
)?`},{captures:{1:{name:"variable.other.php"},2:{name:"punctuation.definition.variable.php"},4:{name:"punctuation.definition.variable.php"}},match:"(?i)((\\${)(?<name>[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)(}))"}]},variables:{patterns:[{include:"#var_language"},{include:"#var_global"},{include:"#var_global_safer"},{include:"#var_basic"},{begin:"\\${(?=.*?})",beginCaptures:{0:{name:"punctuation.definition.variable.php"}},end:"}",endCaptures:{0:{name:"punctuation.definition.variable.php"}},patterns:[{include:"#language"}]}]}},scopeName:"text.html.php.blade",embeddedLangs:["html","xml","sql","javascript","json","css"]});var g=[...r,...p,...m,...e,...d,...n,b];export{g as default};
