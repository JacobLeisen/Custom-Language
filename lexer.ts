// Let x = 25
// [LetToken, IdentiferTk, EqualsToken, NumberToken]

export enum TokenType {
    Number,
    Identifer,
    Equals,
    OpenParen, 
    CloseParen,
    BinaryOperator,
    Let,
}

export interface Token {
    value: string;
    type: TokenType;
}

function token (value = "", type: TokenType): Token {
    return {value, type}
}

export function tokenize (sourceCode: string): Token[] {
    const tokens = new Array<Token>();
    // Note if making series lexer don't split as it bleeds a lot of memory
    const src = sourceCode.split("");

    // Build token until EOF
    while (src.length > 0) {
        if (src[0] == '(') { 
            tokens.push(token(src.shift(), TokenType.OpenParen))
        } else if (src[0] == ')') { 
            tokens.push(token(src.shift(), TokenType.CloseParen))
        } else if (src[0] == '+' || src[0] == '-' || src[0] == '/' || src[0] == '*') { 
            tokens.push(token(src.shift(), TokenType.BinaryOperator))
        } 
    }

    return tokens;
}