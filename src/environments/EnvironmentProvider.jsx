import React, { useEffect, useState } from "react";
import { node, object } from "prop-types";

const EnvironmentContext = React.createContext({
  apiUrl: "",
  isTest: false,
}); // המטודה מחזירה אובייקט עם שלושה ערכים:
// Provider,Consumer,displayName

// provider
// שזאת קומפוננט שמקבלת בפרופס
// value

// והיא משתפת אותו עם כל ה -
// children
// שלה

// const { Provider } = EnvironmentContext;

const defaultEnv = {
  apiUrl: process.env.REACT_APP_API_URL || "http://localhost:8181/api",
  isTest: false,
};

// זאת קומפוננט שאני יוצר שעוטופת את הקומפוננט של
// Provider
// ודואגת לערך של ה
//  value

// children
// הדרך בריאקט לעטוף חתיכה של עץ

const EnvironmentProvider = ({ children, override }) => {
  const [value, setValue] = useState(defaultEnv);

  useEffect(() => {
    if (override) {
      setValue({
        ...defaultEnv,
        ...override,
      });
    }
  }, [override]);

  return (
    <EnvironmentContext.Provider value={value}>
      {children}
    </EnvironmentContext.Provider>
  );
};

EnvironmentProvider.propTypes = {
  children: node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  override: object,
};

EnvironmentProvider.defaultProps = {
  override: null,
};

// במשתנה הגלובלי
// React
// יש את מפתח בשם
// useContext
// שהערך שלו זאת מטודה שמקבלת בפרמטר שלה אוביקט של
// Context
//אני צריך לבדוק אם הפונקציה הצליחה למצוא אחד כזה ואם לא לזרוק שגיאה אחרת להחזיר את ה
//context
// הספציפי שהיא מצאה

const useEnv = () => {
  const contextValue = React.useContext(EnvironmentContext);
  if (!contextValue) {
    throw new Error("useEnv must be used within a EnvironmentProvider");
  }
  return contextValue;
};

export { useEnv, EnvironmentProvider };
