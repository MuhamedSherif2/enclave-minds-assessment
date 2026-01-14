const mongoose = require("mongoose");
const User = require("./model/User");
const Task = require("./model/Task");

mongoose.connect("mongodb://127.0.0.1:27017/taskApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

async function main() {
  try {
    await User.deleteMany({});
    await Task.deleteMany({});

    const user = await User.create({ name: "Ahmed", email: "ahmed@example.com" });

    await Task.create([
      { title: "Task 1", description: "Complete project", status: "Pending", creator: user._id },
      { title: "Task 2", description: "Fix bugs", status: "Completed", creator: user._id },
      { title: "Task 3", description: "Write documentation", status: "Completed", creator: user._id },
    ]);

    const completedTasks = await Task.find({ creator: user._id, status: "Completed" });
    console.log("Completed Tasks for Ahmed:");
    console.log(completedTasks);

  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

main();
