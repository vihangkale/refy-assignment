"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  address: z.string(),
});
export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    address?: string[];
  };
  message?: string | null;
};
const CreateContact = FormSchema.omit({ id: true });
//formdata prop from form action callback
export async function createContact(prevState: State, formData: FormData) {
  const validatedFields = CreateContact.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    address: formData.get("address"),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  // Prepare data for insertion into the database
  const { name, email, address } = validatedFields.data;
  console.log(name, email, address);
  revalidatePath("/contact");
  redirect("/contact");
}
