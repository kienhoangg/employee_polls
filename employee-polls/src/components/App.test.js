import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import reducers from "../reducers";
import middlewares from "../middlewares";
import { createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
describe("test _saveQuestionAnswer", () => {
  it("will return true if success answer the question", async () => {
    const usersState = {
      sarahedo: {
        id: "sarahedo",
        password: "password123",
        name: "Sarah Edo",
        avatarURL: "https://randomuser.me/api/portraits/women/13.jpg",
        answers: {
          "8xf0y6ziyjabvozdd253nd": "optionOne",
          "6ni6ok3ym7mf1p33lnez": "optionOne",
          am8ehyc8byjqgar0jgpub9: "optionTwo",
          loxhs1bqm25b708cmbf3g: "optionTwo",
        },
        questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
      },
      tylermcginnis: {
        id: "tylermcginnis",
        password: "abc321",
        name: "Tyler McGinnis",
        avatarURL: "https://randomuser.me/api/portraits/men/79.jpg",
        answers: {
          vthrdm985a262al8qx3do: "optionOne",
          xj352vofupe1dqz9emx13r: "optionTwo",
        },
        questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
      },
      mtsamis: {
        id: "mtsamis",
        password: "xyz123",
        name: "Mike Tsamis",
        avatarURL: "https://randomuser.me/api/portraits/women/26.jpg",
        answers: {
          xj352vofupe1dqz9emx13r: "optionOne",
          vthrdm985a262al8qx3do: "optionTwo",
          "6ni6ok3ym7mf1p33lnez": "optionOne",
        },
        questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
      },
      zoshikanlu: {
        id: "zoshikanlu",
        password: "pass246",
        name: "Zenobia Oshikanlu",
        avatarURL: "https://randomuser.me/api/portraits/women/54.jpg",
        answers: {
          xj352vofupe1dqz9emx13r: "optionOne",
        },
        questions: [],
      },
    };

    var questionsState = {
      "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        author: "sarahedo",
        timestamp: 1467166872634,
        optionOne: {
          votes: ["sarahedo"],
          text: "Build our new application with Javascript",
        },
        optionTwo: {
          votes: [],
          text: "Build our new application with Typescript",
        },
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: "6ni6ok3ym7mf1p33lnez",
        author: "mtsamis",
        timestamp: 1468479767190,
        optionOne: {
          votes: [],
          text: "hire more frontend developers",
        },
        optionTwo: {
          votes: ["mtsamis", "sarahedo"],
          text: "hire more backend developers",
        },
      },
      am8ehyc8byjqgar0jgpub9: {
        id: "am8ehyc8byjqgar0jgpub9",
        author: "sarahedo",
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: "conduct a release retrospective 1 week after a release",
        },
        optionTwo: {
          votes: ["sarahedo"],
          text: "conduct release retrospectives quarterly",
        },
      },
      loxhs1bqm25b708cmbf3g: {
        id: "loxhs1bqm25b708cmbf3g",
        author: "tylermcginnis",
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: "have code reviews conducted by peers",
        },
        optionTwo: {
          votes: ["sarahedo"],
          text: "have code reviews conducted by managers",
        },
      },
      vthrdm985a262al8qx3do: {
        id: "vthrdm985a262al8qx3do",
        author: "tylermcginnis",
        timestamp: 1489579767190,
        optionOne: {
          votes: ["tylermcginnis"],
          text: "take a course on ReactJS",
        },
        optionTwo: {
          votes: ["mtsamis"],
          text: "take a course on unit testing with Jest",
        },
      },
      xj352vofupe1dqz9emx13r: {
        id: "xj352vofupe1dqz9emx13r",
        author: "mtsamis",
        timestamp: 1493579767190,
        optionOne: {
          votes: ["mtsamis", "zoshikanlu"],
          text: "deploy to production once every two weeks",
        },
        optionTwo: {
          votes: ["tylermcginnis"],
          text: "deploy to production once every month",
        },
      },
    };

    var questionsResult = {
      "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        author: "sarahedo",
        timestamp: 1467166872634,
        optionOne: {
          votes: ["sarahedo"],
          text: "Build our new application with Javascript",
        },
        optionTwo: {
          votes: [],
          text: "Build our new application with Typescript",
        },
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: "6ni6ok3ym7mf1p33lnez",
        author: "mtsamis",
        timestamp: 1468479767190,
        optionOne: {
          votes: [],
          text: "hire more frontend developers",
        },
        optionTwo: {
          votes: ["mtsamis", "sarahedo"],
          text: "hire more backend developers",
        },
      },
      am8ehyc8byjqgar0jgpub9: {
        id: "am8ehyc8byjqgar0jgpub9",
        author: "sarahedo",
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: "conduct a release retrospective 1 week after a release",
        },
        optionTwo: {
          votes: ["sarahedo"],
          text: "conduct release retrospectives quarterly",
        },
      },
      loxhs1bqm25b708cmbf3g: {
        id: "loxhs1bqm25b708cmbf3g",
        author: "tylermcginnis",
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: "have code reviews conducted by peers",
        },
        optionTwo: {
          votes: ["sarahedo"],
          text: "have code reviews conducted by managers",
        },
      },
      vthrdm985a262al8qx3do: {
        id: "vthrdm985a262al8qx3do",
        author: "tylermcginnis",
        timestamp: 1489579767190,
        optionOne: {
          votes: ["tylermcginnis"],
          text: "take a course on ReactJS",
        },
        optionTwo: {
          votes: ["mtsamis"],
          text: "take a course on unit testing with Jest",
        },
      },
      xj352vofupe1dqz9emx13r: {
        id: "xj352vofupe1dqz9emx13r",
        author: "mtsamis",
        timestamp: 1493579767190,
        optionOne: {
          votes: ["mtsamis", "zoshikanlu", "sarahedo"],
          text: "deploy to production once every two weeks",
        },
        optionTwo: {
          votes: ["tylermcginnis"],
          text: "deploy to production once every month",
        },
      },
    };
    var usersResult = {
      sarahedo: {
        id: "sarahedo",
        password: "password123",
        name: "Sarah Edo",
        avatarURL: "https://randomuser.me/api/portraits/women/13.jpg",
        answers: {
          "8xf0y6ziyjabvozdd253nd": "optionOne",
          "6ni6ok3ym7mf1p33lnez": "optionOne",
          am8ehyc8byjqgar0jgpub9: "optionTwo",
          loxhs1bqm25b708cmbf3g: "optionTwo",
          xj352vofupe1dqz9emx13r: "optionOne",
        },
        questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
      },
      tylermcginnis: {
        id: "tylermcginnis",
        password: "abc321",
        name: "Tyler McGinnis",
        avatarURL: "https://randomuser.me/api/portraits/men/79.jpg",
        answers: {
          vthrdm985a262al8qx3do: "optionOne",
          xj352vofupe1dqz9emx13r: "optionTwo",
        },
        questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
      },
      mtsamis: {
        id: "mtsamis",
        password: "xyz123",
        name: "Mike Tsamis",
        avatarURL: "https://randomuser.me/api/portraits/women/26.jpg",
        answers: {
          xj352vofupe1dqz9emx13r: "optionOne",
          vthrdm985a262al8qx3do: "optionTwo",
          "6ni6ok3ym7mf1p33lnez": "optionOne",
        },
        questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
      },
      zoshikanlu: {
        id: "zoshikanlu",
        password: "pass246",
        name: "Zenobia Oshikanlu",
        avatarURL: "https://randomuser.me/api/portraits/women/54.jpg",
        answers: {
          xj352vofupe1dqz9emx13r: "optionOne",
        },
        questions: [],
      },
    };
    var authedUser = "sarahedo";
    var qid = "xj352vofupe1dqz9emx13r";
    var answer = "optionOne";
    var result = await _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
      usersState,
      questionsState,
    });
    expect(result).toEqual({
      users: usersResult,
      questions: questionsResult,
    });
  });

  it("will return an error if the params are not found", async () => {
    const usersState = {
      sarahedo: {
        id: "sarahedo",
        password: "password123",
        name: "Sarah Edo",
        avatarURL: "https://randomuser.me/api/portraits/women/13.jpg",
        answers: {
          "8xf0y6ziyjabvozdd253nd": "optionOne",
          "6ni6ok3ym7mf1p33lnez": "optionOne",
          am8ehyc8byjqgar0jgpub9: "optionTwo",
          loxhs1bqm25b708cmbf3g: "optionTwo",
        },
        questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
      },
      tylermcginnis: {
        id: "tylermcginnis",
        password: "abc321",
        name: "Tyler McGinnis",
        avatarURL: "https://randomuser.me/api/portraits/men/79.jpg",
        answers: {
          vthrdm985a262al8qx3do: "optionOne",
          xj352vofupe1dqz9emx13r: "optionTwo",
        },
        questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
      },
      mtsamis: {
        id: "mtsamis",
        password: "xyz123",
        name: "Mike Tsamis",
        avatarURL: "https://randomuser.me/api/portraits/women/26.jpg",
        answers: {
          xj352vofupe1dqz9emx13r: "optionOne",
          vthrdm985a262al8qx3do: "optionTwo",
          "6ni6ok3ym7mf1p33lnez": "optionOne",
        },
        questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
      },
      zoshikanlu: {
        id: "zoshikanlu",
        password: "pass246",
        name: "Zenobia Oshikanlu",
        avatarURL: "https://randomuser.me/api/portraits/women/54.jpg",
        answers: {
          xj352vofupe1dqz9emx13r: "optionOne",
        },
        questions: [],
      },
    };

    var questionsState = {
      "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        author: "sarahedo",
        timestamp: 1467166872634,
        optionOne: {
          votes: ["sarahedo"],
          text: "Build our new application with Javascript",
        },
        optionTwo: {
          votes: [],
          text: "Build our new application with Typescript",
        },
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: "6ni6ok3ym7mf1p33lnez",
        author: "mtsamis",
        timestamp: 1468479767190,
        optionOne: {
          votes: [],
          text: "hire more frontend developers",
        },
        optionTwo: {
          votes: ["mtsamis", "sarahedo"],
          text: "hire more backend developers",
        },
      },
      am8ehyc8byjqgar0jgpub9: {
        id: "am8ehyc8byjqgar0jgpub9",
        author: "sarahedo",
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: "conduct a release retrospective 1 week after a release",
        },
        optionTwo: {
          votes: ["sarahedo"],
          text: "conduct release retrospectives quarterly",
        },
      },
      loxhs1bqm25b708cmbf3g: {
        id: "loxhs1bqm25b708cmbf3g",
        author: "tylermcginnis",
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: "have code reviews conducted by peers",
        },
        optionTwo: {
          votes: ["sarahedo"],
          text: "have code reviews conducted by managers",
        },
      },
      vthrdm985a262al8qx3do: {
        id: "vthrdm985a262al8qx3do",
        author: "tylermcginnis",
        timestamp: 1489579767190,
        optionOne: {
          votes: ["tylermcginnis"],
          text: "take a course on ReactJS",
        },
        optionTwo: {
          votes: ["mtsamis"],
          text: "take a course on unit testing with Jest",
        },
      },
      xj352vofupe1dqz9emx13r: {
        id: "xj352vofupe1dqz9emx13r",
        author: "mtsamis",
        timestamp: 1493579767190,
        optionOne: {
          votes: ["mtsamis", "zoshikanlu"],
          text: "deploy to production once every two weeks",
        },
        optionTwo: {
          votes: ["tylermcginnis"],
          text: "deploy to production once every month",
        },
      },
    };

    var authedUser = "sarahedo";
    var qid = "xj352vofupe1dqz9emx13r";
    var answer = "optionOne";

    await expect(
      _saveQuestionAnswer({
        authedUser,
        qids: qid,
        answer,
        usersState,
        questionsState,
      })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});

describe("test _saveQuestion", () => {
  it("will return true if success add new the question", async () => {
    var optionTwoText = "Click this for option 2";
    var optionOneText = "Click this for option 1";
    var author = "sarahedo";
    var question = {
      optionOneText,
      optionTwoText,
      author,
    };
    var result = await _saveQuestion(question);
    var questionResult = {
      id: "9bx6zkznrai3q4df9ovul",
      timestamp: 1687020328516,
      author: "sarahedo",
      optionOne: { votes: [], text: "Click this for option 1" },
      optionTwo: { votes: [], text: "Click this for option 2" },
    };
    expect(result.author).toEqual(questionResult.author);
    expect(result.optionOne).toEqual(questionResult.optionOne);
    expect(result.optionTwo).toEqual(questionResult.optionTwo);
  });
  it("will return an error if params are not found", async () => {
    await expect(
      _saveQuestion({
        optionOneTexts: "optionOneTexts",
        optionTwoTexts: "optionTwoTexts",
      })
    ).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("will return an error if option text one not found", async () => {
    await expect(
      _saveQuestion({
        optionTwoTexts: "optionTwoTexts",
      })
    ).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("test snapshot", () => {
  it("will match snapshot", () => {
    const store = createStore(reducers, middlewares);
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("test firechange", () => {
  it("will match if not input both user and password ", () => {
    const store = createStore(reducers, middlewares);
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("error-header")).toBeInTheDocument();
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
  });

  it("will match if just input passwsord ", () => {
    const store = createStore(reducers, middlewares);
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    var input = component.getByTestId("password");
    fireEvent.change(input, { target: { value: "password123" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("error-header")).toBeInTheDocument();
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
  });

  it("will match if just input user ", () => {
    const store = createStore(reducers, middlewares);
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    var input = component.getByTestId("user");
    fireEvent.change(input, { target: { value: "sarahedo" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("error-header")).toBeInTheDocument();
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
  });

  it("will match if input both user and password ", () => {
    const store = createStore(reducers, middlewares);
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    var inputUser = component.getByTestId("user");
    fireEvent.change(inputUser, { target: { value: "sarahedo" } });

    var inputPassword = component.getByTestId("password");
    fireEvent.change(inputPassword, { target: { value: "password123" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("error-header")).not.toBeInTheDocument();
    expect(component.queryByTestId("success-header")).toBeInTheDocument();
  });
});
