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

function isalpha (src: string) {
    return src.toUpperCase() != src.toLowerCase();
}

function isint (str: string) {
    const c = str.charCodeAt(0)
    const bounds = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
    return (c >= bounds[0] && c <= bounds[1]);
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
        } else if (src[0] == '=') { 
            tokens.push(token(src.shift(), TokenType.Equals))
        } else {
            // Handle multicharacter tokens

            // Build num token
            if (isint(src[0])) {
                let num = "";
                while (src.length > 0 && isint(src[0])) {
                    num += src.shift();
                }

                tokens.push(token(num, TokenType.Number));
            } else if (isalpha(src[0])) {
                let ident = "";
                while (src.length > 0 && isalpha(src[0])) {
                    ident += src.shift();
                }
                
                tokens.push(token(ident, TokenType.Identifer));
            }
        }



    }

    return tokens;
}