export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormPayload extends ContactFormData {
  recaptchaToken: string;
}