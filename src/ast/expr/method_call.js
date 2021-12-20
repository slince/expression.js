import Expr from "../expr";
import FunctionCallExpression from "./function_call";

class MethodCallExpression extends Expr{
    constructor(object, method, _arguments, lineno) {
        super(null, lineno);
        this.object = object;
        this.method = method;
        this.arguments = _arguments;
    }
}

export default MethodCallExpression;