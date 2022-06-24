const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    id: { type: String, require: true },
    question: { type: String, require: true },
    option: { type: String, require: true },
    answer: { type: String, require: true },
    testName: { type: String, require: true },
    level: { type: String, require: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const TestSchema = mongoose.model("test", testSchema);
module.exports = TestSchema;

// {
//   "id" : "46",
//   "question" : "Let f : R → R be defined by f(x) = 1/x ∀ x ∈ R. Then f is",
//   "option" : ["one-one" , "onto" , "bijective" , "f is not defined"],
//   "answer" : "f is not defined",
//   "testName" : "Maths",
//   "level" : "Low"
// },