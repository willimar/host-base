export interface IHandleMessage {
  messageType: string;
  message: string;
  code: number;
  stackTrace: string[];
}
