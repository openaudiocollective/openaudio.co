import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

// const Footer = (
//   <footer className="border-t border-gray-300 py-8 text-center text-sm">
//     © Copyright {new Date().getFullYear()} {AppConfig.title}.
//   </footer>
// );

// const Header = (
//   <header className="border-b border-gray-300">
//     <div className="pb-8 pt-16">
//       <h1 className="text-3xl font-bold text-gray-900">{AppConfig.title}</h1>
//       <h2 className="text-xl">{AppConfig.description}</h2>
//     </div>
//   </header>
// );

const Main = (props: IMainProps) => (
  <div className="h-screen w-full bg-black text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto flex h-full items-center justify-center">
      {/* {Header} */}

      <main className="content flex text-xl">{props.children}</main>

      {/* {Footer} */}
    </div>
  </div>
);

export { Main };
