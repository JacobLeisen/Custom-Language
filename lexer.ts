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

export function tokenize (sourceCode: string): Token[] {
    const tokens = new Array<Token>();
    // Note if making series lexer don't split as it bleeds a lot of memory
    const src = sourceCode.split("");

    // Build token until EOF
    while (src.length > 0) {

    }

    return tokens;
}