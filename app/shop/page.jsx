"use client";

import * as React from "react"
import { Menu } from "/components/basic/Menu"
import "./page.css"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
export default function Shop() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center p-24">
        <Menu> </Menu>
      </main>

      <div style={{ margin: "auto", marginTop: "50px", width: "1200px" }}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  <Card x-chunk="dashboard-05-chunk-1">
                    <CardHeader className="pb-2">
                      <CardDescription>This Week</CardDescription>
                      <CardTitle className="text-4xl">$1,329</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +25% from last week
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={25} aria-label="25% increase" />
                    </CardFooter>
                  </Card>
                  <Card x-chunk="dashboard-05-chunk-2">
                    <CardHeader className="pb-2">
                      <CardDescription>This Month</CardDescription>
                      <CardTitle className="text-4xl">$5,329</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +10% from last month
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={12} aria-label="12% increase" />
                    </CardFooter>
                  </Card>
                </div>
                <Tabs defaultValue="week">
                  <TabsContent value="week">
                    <Card x-chunk="dashboard-05-chunk-3">
                      <CardHeader className="px-7">
                        <CardTitle>Orders</CardTitle>
                        <CardDescription>
                          Recent orders from your store.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Customer</TableHead>
                              <TableHead className="sm:table-cell">
                                Type
                              </TableHead>
                              <TableHead className="sm:table-cell">
                                Status
                              </TableHead>
                              <TableHead className="md:table-cell">
                                Date
                              </TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="bg-accent">
                              <TableCell>
                                <div className="font-medium">Glimmer Lamps</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                  liam@example.com
                                </div>
                              </TableCell>
                              <TableCell className="sm:table-cell">
                                Sale
                              </TableCell>
                              <TableCell className="sm:table-cell">
                                <Badge className="text-xs" variant="secondary">
                                  Fulfilled
                                </Badge>
                              </TableCell>
                              <TableCell className="md:table-cell">
                                2023-06-23
                              </TableCell>
                              <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <div className="font-medium">Aqua Filters</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                  olivia@example.com
                                </div>
                              </TableCell>
                              <TableCell className="sm:table-cell">
                                Refund
                              </TableCell>
                              <TableCell className="sm:table-cell">
                                <Badge className="text-xs" variant="outline">
                                  Declined
                                </Badge>
                              </TableCell>
                              <TableCell className="md:table-cell">
                                2023-06-24
                              </TableCell>
                              <TableCell className="text-right">$150.00</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
              <div>
                <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        Order Oe31b70H
                      </CardTitle>
                      <CardDescription>Date: July 23, 2024</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                      <div className="font-semibold">Order Details</div>
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Glimmer Lamps x <span>2</span>
                          </span>
                          <span>$250.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Aqua Filters x <span>1</span>
                          </span>
                          <span>$49.00</span>
                        </li>
                      </ul>
                      <Separator className="my-2" />
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span>$299.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Shipping</span>
                          <span>$5.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>$25.00</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                          <span className="text-muted-foreground">Total</span>
                          <span>$329.00</span>
                        </li>
                      </ul>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                      <div style={{marginTop: "10px"}} className="font-semibold">Customer Information</div>
                      <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Customer</dt>
                          <dd>Hughie Phan</dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Email</dt>
                          <dd>
                            <a href="mailto:">phanthanhhuy1996@gmail.com</a>
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Phone</dt>
                          <dd>
                            <a href="tel:">+1 234 567 890</a>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </CardContent>
                </Card>
                <Card style={{marginTop: "10px"}} className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                  <CardHeader className="pb-3">
                    <CardTitle>Your Orders</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      Introducing Our Dynamic Orders Dashboard for Seamless
                      Management and Insightful Analysis.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button>Create New Order</Button>
                  </CardFooter>
                </Card>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}