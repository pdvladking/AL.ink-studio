import Input from "@/app/shared/Input";

export default function QueryInputs({ register }) {
  return (
    <div className="space-y-4">
      <Input
        label="Name"
        name="name"
        placeholder="Your full name"
        required
        {...register("name")}
      />
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="you@example.com"
        required
        {...register("email")}
      />
      <Input
        type="tel"
        label="Phone"
        name="phone"
        placeholder="+977-98XXXXXXX"
        {...register("phone")}
      />
      <Input
        type="textarea"
        label="Message"
        name="message"
        placeholder="Write your query here..."
        rows={5}
        {...register("message")}
      />
    </div>
  );
}