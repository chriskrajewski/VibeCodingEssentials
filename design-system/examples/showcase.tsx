/**
 * Professional Application Showcase
 * Real-world example of MW Design System in action
 * Based on MW Brand Standards
 */

import {
  Button,
  Alert,
  AlertTitle,
  AlertDescription,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  FormField,
  Input,
  Label,
  Textarea,
} from '../components/ui';
import Image from "next/image";

export function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-mw-card">
      {/* Navigation */}
      <nav className="mw-black bg-mw-black rounded-none border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-mw-white">
                          <Image
            src="https://mwi-ecommerce-inventory.s3.us-east-2.amazonaws.com/mw_horizontal.png"
            alt="MW Components"
            width="256"
            height="256"
            priority
            className="transition-all duration-200"
          />
          </span>
              </div>
              <div className="hidden md:flex gap-1">
                <Button variant="ghost" size="sm">Dashboard</Button>
                <Button variant="ghost" size="sm">Orders</Button>
                <Button variant="ghost" size="sm">Products</Button>
                <Button variant="ghost" size="sm">Analytics</Button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">Settings</Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback>CK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-mw-black">
            Dashboard
          </h1>
          <p className="text-mw-grey mt-1">
            Welcome back! Here's what's happening with your orders today.
          </p>
        </div>

        {/* Alerts Section */}
        <div className="mb-8 space-y-3">
          <Alert variant="success">
            <AlertTitle>Payment Processed</AlertTitle>
            <AlertDescription>
              Your payment of $1,247.50 has been successfully processed.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTitle>Inventory Low</AlertTitle>
            <AlertDescription>
              3 products are running low on stock. Review inventory to avoid stockouts.
            </AlertDescription>
          </Alert>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-mw-grey">Total Revenue</p>
                <p className="text-2xl font-semibold text-mw-black mt-2">
                  $45,231
                </p>
              </div>
              <div className="h-12 w-12 bg-mw-blue/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Badge tone="success">+20.1%</Badge>
              <span className="text-sm text-mw-grey">from last month</span>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-mw-grey">Orders</p>
                <p className="text-2xl font-semibold text-mw-black mt-2">
                  2,345
                </p>
              </div>
              <div className="h-12 w-12 bg-mw-green/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Badge tone="success">+12.5%</Badge>
              <span className="text-sm text-mw-grey">from last month</span>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-mw-grey">Active Users</p>
                <p className="text-2xl font-semibold text-mw-black mt-2">
                  12,234
                </p>
              </div>
              <div className="h-12 w-12 bg-mw-orange/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Badge tone="info">+8.2%</Badge>
              <span className="text-sm text-mw-grey">from last month</span>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-mw-grey">Conversion Rate</p>
                <p className="text-2xl font-semibold text-mw-black mt-2">
                  3.24%
                </p>
              </div>
              <div className="h-12 w-12 bg-mw-yellow/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Badge tone="warning">-2.1%</Badge>
              <span className="text-sm text-mw-grey">from last month</span>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader title="Recent Orders" description="Latest orders from your store" />
              <CardContent>
                <table>
                  <thead>
                    <tr>
                      <th className="text-left">Customer</th>
                      <th className="text-left">Product</th>
                      <th className="text-left">Status</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>AB</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">Alice Brown</span>
                        </div>
                      </td>
                      <td>Premium Widget</td>
                      <td><Badge tone="success">Completed</Badge></td>
                      <td className="text-right font-medium">$299.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>CD</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">Charlie Davis</span>
                        </div>
                      </td>
                      <td>Starter Kit</td>
                      <td><Badge tone="info">Processing</Badge></td>
                      <td className="text-right font-medium">$149.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>EF</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">Emma Foster</span>
                        </div>
                      </td>
                      <td>Enterprise License</td>
                      <td><Badge tone="warning">Pending</Badge></td>
                      <td className="text-right font-medium">$999.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>GH</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">George Hill</span>
                        </div>
                      </td>
                      <td>Basic Plan</td>
                      <td><Badge tone="success">Completed</Badge></td>
                      <td className="text-right font-medium">$49.00</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader title="Quick Actions" />
              <CardContent className="space-y-3">
                <Button variant="mw" className="w-full justify-start">
                  Create New Order
                </Button>
                <Button variant="primary" className="w-full justify-start">
                  Add Product
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader title="Contact Support" />
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help?" className="mt-1" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Button Variants */}
        <div className="mt-12">
          <Card>
            <CardHeader
              title="Component Library"
              description="All available component variants in the MW Design System"
            />
            <CardContent className="space-y-8">
              {/* Buttons */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="mw">MW Yellow</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" size="xs">Extra Small</Button>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Badge Tones</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge tone="info">Info</Badge>
                  <Badge tone="success">Success</Badge>
                  <Badge tone="warning">Warning</Badge>
                  <Badge tone="danger">Danger</Badge>
                  <Badge tone="neutral">Neutral</Badge>
                </div>
              </div>

              {/* Alerts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Alert Variants</h3>
                <div className="space-y-3">
                  <Alert variant="info">
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>This is an informational message for users.</AlertDescription>
                  </Alert>
                  <Alert variant="success">
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>Your action was completed successfully.</AlertDescription>
                  </Alert>
                  <Alert variant="warning">
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>Please review this important information.</AlertDescription>
                  </Alert>
                  <Alert variant="error">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Something went wrong. Please try again.</AlertDescription>
                  </Alert>
                </div>
              </div>

              {/* Form Elements */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Form Elements</h3>
                <div className="max-w-md space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="bio">Biography</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself..." className="mt-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-mw-grey">
            <p>MW Components Design System • Based on MW Brand Standards</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
