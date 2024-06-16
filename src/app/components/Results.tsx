import { Question } from "../types/Question";

type Props = {
  questions: Question[];
  answers: number[];
};

export const Results = ({ questions, answers }: Props) => {
  return (
    <div>
      {questions.map((item, key) => (
        <div key={key} className="mb-3">
          <div className="font-bold">
            {key + 1}. {item.question}
          </div>
          <div>
            <span>
              ({item.answer === answers[key] ? "Acertouu" : "Errroooou!"}) -
              {item.options[item.answer]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
