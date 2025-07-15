"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react"
import { useState } from "react"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    setLoginError("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const { email, password } = data

    // Dummy login logic
    if (email === "admin@school.edu" && password === "123456") {
      router.push("/dashboard")
    } else {
      setLoginError("Invalid email or password. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* School Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">EduPortal</h1>
          <p className="text-gray-600">Student & Staff Login Portal</p>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center text-gray-800">Welcome Back</CardTitle>
            <CardDescription className="text-center text-gray-600">Sign in to access your account</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {loginError && (
              <Alert variant="destructive" className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="student@school.edu"
                            className="pl-10 h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 pr-10 h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-gray-600">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-teal-600 hover:text-teal-800 font-medium">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium rounded-lg transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-teal-200">
              <p className="text-sm font-medium text-teal-800 mb-2">Demo Credentials:</p>
              <p className="text-xs text-teal-700">Email: admin@school.edu</p>
              <p className="text-xs text-teal-700">Password: 123456</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-gray-600">
            Need help? Contact{" "}
            <a href="#" className="text-teal-600 hover:text-teal-800 font-medium">
              IT Support
            </a>
          </p>
          <p className="text-xs text-gray-500">© 2024 EduPortal. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
