// Let x = 25
// [LetToken, IdentiferTk, EqualsToken, NumberToken]

export enum TokenType {
    Number,
    Identifer,
    Equals,
    OpenParen, CloseParen,
    
    BinaryOperator,

    Let,
}

export interface Token {
    value: string,
    type: TokenType,
}
