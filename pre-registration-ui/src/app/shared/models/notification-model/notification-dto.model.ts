export class NotificationDtoModel {
  constructor(
    public name: string,
    public preRegistrationId: string,
    public appointmentDate: string,
    public appointmentTime: string,
    public mobNum: string,
    public emailID: string,
    public additionalRecipient: boolean,
    public isPreBookingNotification:string,
    public isBatch: boolean
  ) {}
}
