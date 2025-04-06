let message = "Hello from TypeScript";

const fixedMessage = "Hello world!";

function handle(status: "success" | "error") {
  if (status === "success") {
    console.log("all good!");
  }
}

let myStatus = "success" as const;
handle(myStatus);
