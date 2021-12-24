import Lexer from "./lexer.js";
import Parser from "./parser.js";

class Runtime{
    constructor(context) {
        this.context = context || {};
    }

    hasReference(property){
        return typeof this.context[property] !== 'undefined'
    }

    getReference(property){
        return this.context[property];
    }

    setReference(property, value){
        return this.context[property] = value;
    }
}

class Evaluator{

    evaluate(expression, context){
        const node = this.createParser(expression).parse();
        return node.evaluate(new Runtime(context));
    }

    parse(expression){
        return this.createParser(expression).parse();
    }

    createParser(source){
        return  new Parser(new Lexer(source).lex());
    }
}

export default Evaluator;