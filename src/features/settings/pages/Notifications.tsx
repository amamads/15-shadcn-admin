import { Card } from "@/components/atoms/card";
import { Label } from "@/components/atoms/label";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group";
import { Switch } from "@/components/atoms/switch";

const radioValues = [
  "All new messages",
  "Direct messages and mentions",
  "Nothing",
];
const notificationSettings = [
  {
    title: "Communication emails",
    description: "Receive emails about your account activity.",
  },
  {
    title: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
  },
  {
    title: "Social emails",
    description: "Receive emails for friend requests, follows, and more.",
  },
  {
    title: "Security emails",
    description: "Receive emails about your account activity and security.",
  },
];
export const Notifications = () => {
  return (
    <div className="space-y-7">
      <div className="grid gap-4">
        <Label>Notify me about...</Label>
        <RadioGroup>
          {radioValues.map((value, i) => (
            <div className="flex items-center gap-2">
              <RadioGroupItem value={value} id={`settings-radio-group-${i}`} />
              <Label htmlFor={`settings-radio-group-${i}`}>{value}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <h5>Email Notifications</h5>

      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" className="z-10"/>
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>

      {notificationSettings.map(({ title, description }, i) => (
        <Card key={title}>
          <Label id={`notifications-settings-switch-${i}`}>
            <h6>{title}</h6>
          </Label>
          <p>{description}</p>
          <Switch id={`notifications-settings-switch-${i}`} />
        </Card>
      ))}
    </div>
  );
};
