import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// Mocking schema since we have no backend
export const insertOrderSchema = z.object({
  customerType: z.enum(["individual", "company"]),
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(5, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  orderType: z.enum(["product", "logo", "packaging", "custom"]),
  quantity: z.coerce.number().min(1, "Minimum quantity is 1"),
  size: z.string().min(1, "Size is required"),
  surface: z.string().min(1, "Surface type is required"),
  description: z.string().optional(),
  deadline: z.string().min(1, "Deadline is required"),
  notes: z.string().optional(),
});

export type OrderInput = z.infer<typeof insertOrderSchema>;

export function useCreateOrder() {
  return useMutation({
    mutationFn: async (data: OrderInput) => {
      // Validate
      const validated = insertOrderSchema.parse(data);
      
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("[Mock API] Order created:", validated);
      
      return {
        id: Math.floor(Math.random() * 10000),
        ...validated,
        status: "pending",
        createdAt: new Date().toISOString()
      };
    },
  });
}
