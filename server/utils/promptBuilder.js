export const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMode,
  includeDiagram,
  includeChart
}) => {
  return `
You are a STRICT JSON generator for an exam preparation system.

⚠️ VERY IMPORTANT:
- Output MUST be valid JSON
- Your response will be parsed using JSON.parse()
- INVALID JSON will cause system failure
- Use ONLY double quotes "
- NO comments
- NO trailing commas
- Escape line breaks using \\n
- Do NOT use emojis inside text values

TASK:
Convert the given topic into exam-focused notes.

INPUT:
Topic: ${topic}
Class Level: ${classLevel || "Not specified"}
Exam Type: ${examType || "General"}
Revision Mode: ${revisionMode ? "ON" : "OFF"}
Include Diagram: ${includeDiagram ? "YES" : "NO"}
Include Charts: ${includeChart ? "YES" : "NO"}

GLOBAL CONTENT RULES:
- Use clear, simple, exam-oriented language
- Notes MUST be Markdown formatted
- Headings and bullet points only

REVISION MODE RULES:
- If REVISION MODE is ON:
  - Notes must be VERY SHORT
  - Only bullet points
  - One-line answers only
  - Definitions
  - Formulas
  - Keywords
  - No paragraphs
  - revisionPoints MUST summarize all important facts

- If REVISION MODE is OFF:
  - Notes must be exam-focused
  - Give short explanations
  - Give examples where needed
  - Keep paragraphs under 4 lines

IMPORTANCE RULES:
- Divide sub-topics into:
  - ⭐ Very Important
  - ⭐⭐ Important
  - ⭐⭐⭐ Frequently Asked
- All three categories MUST exist.

QUESTION RULES (VERY IMPORTANT)

- NEVER leave questions empty.
- Generate exactly:
  - 5 short exam questions
  - 5 long exam questions
  - 1 diagram based question
- Questions must follow CBSE exam pattern.
- If information is limited, create probable exam questions.
- Never return empty arrays.

questions.short MUST contain exactly 5 strings.
questions.long MUST contain exactly 5 strings.
questions.diagram MUST contain one string.

DIAGRAM RULES:
- If Include Diagram is YES:
  - diagram.data MUST contain valid Mermaid syntax.
  - Must start with:
    graph TD
- If Include Diagram is NO:
  - diagram.data = ""

CHART RULES:
- If Include Charts is YES:
  - charts MUST NOT be empty.
  - Generate at least one chart.
  - Allowed:
    - bar
    - line
    - pie
- If Include Charts is NO:
  - charts = []

STRICT JSON FORMAT (DO NOT CHANGE)

{
  "subTopics": {
    "⭐": [
      "Topic 1"
    ],
    "⭐⭐": [
      "Topic 2"
    ],
    "⭐⭐⭐": [
      "Topic 3"
    ]
  },

  "importance": "⭐⭐⭐",

  "notes": "Markdown notes",

  "revisionPoints": [
    "Point 1",
    "Point 2",
    "Point 3"
  ],

  "questions": {
    "short": [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5"
    ],

    "long": [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5"
    ],

    "diagram": "Draw a labelled diagram related to the topic."
  },

  "diagram": {
    "type": "graph",
    "data": "graph TD\\nA[Topic]-->B[Sub Topic]"
  },

  "charts": [
    {
      "type": "bar",
      "title": "Importance",
      "data": [
        {
          "name": "Topic",
          "value": 10
        }
      ]
    }
  ]
}

RETURN ONLY VALID JSON.

DO NOT return:

"short": []

DO NOT return:

"long": []

DO NOT return:

"diagram": ""

Empty arrays are NOT allowed.
Empty strings are NOT allowed.

If you cannot find questions, create probable CBSE exam questions.

Failure to generate questions is considered an invalid response.
`;
};