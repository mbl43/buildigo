## Notes
- **Fullstack Framework**: `Nextjs` is full stack framework.
- **App folder**: `Each folder contains layout.tsx and page.tsx file` .
* `Readonly<{
  children: React.ReactNode;
}>` it conducting type checking with children(Type safty) this is complusory for checking type of page that will be render 

* In next.js if we created navbar folder inside that it contains layout and page file `if we create another file insider it will also consist same files` 
* `Outside app folder create componet,data and utils folder`
---
 **Navbar challeages**:

* For using any react hooks in next.js in any file we need write 'use client' in top of the file because `next.js is full stack framework so hooks are used in client side so thats why we need use client `

** in typescript we can add typechcking for data i.e <br>`
interface emp {
    salary:99,
    name:"mangesh",
    des:"ff",
    id:1,
  role:"engineer"}`<br>
if we call an api for emp to show in website and role is missing in api it will give error for it