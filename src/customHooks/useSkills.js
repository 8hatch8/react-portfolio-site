import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { skillReducer, initialState, actionTypes } from '../reducers/skillReducer';

export const useSkills = () => {

  const [ state, dispatch] = useReducer(skillReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.fetch });
    axios.get('https://api.github.com/users/8hatch8/repos')
      .then((res) => {
        const languageList = res.data.map(data => data.language);
        const countedLanguageList = generateLanguageCountOjb(languageList);
        dispatch({
          type: actionTypes.success,
          payload: {
            languageList: countedLanguageList
          }
        });
      })
      .catch(() => {dispatch({ type: actionTypes.error })});
  }, []);

  // 各言語とその出現数をリストとして格納（[ {language: lang, count: number}, ... ]）
  const generateLanguageCountOjb = (allLanguageList) => {
    const notNullLanguageList = allLanguageList.filter(lang => lang != null);
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    return uniqueLanguageList.map(uniLang => {
      return {
        language: uniLang,
        count: allLanguageList.filter(lang => lang === uniLang).length
      }
    });
  };

  const converseCountToPercentage = (count) => {
    if (count > 10) { return 100; }
    return count * 10;
  };

  const sortedLanguageList = () => (
    state.languageList.sort((firstLang, nextLang) => {
      return nextLang.count - firstLang.count
    })
  )

  return [
    sortedLanguageList,
    state.requestState,
    converseCountToPercentage
  ];
}