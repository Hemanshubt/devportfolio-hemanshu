
import React from 'react';

const Terminal = () => {
  return (
    <div className="w-full max-w-lg neo-blur rounded-lg overflow-hidden shadow-2xl">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="ml-2 text-xs text-gray-400">devops-profile.js</span>
      </div>
      <div className="terminal-content text-left">
        <pre className="whitespace-pre-wrap">
          <span className="code-tag">const</span> <span className="code-name">devOpsEngineer</span> <span className="code-operator">=</span> {"{"}
            <br />  <span className="code-attr">name</span><span className="code-operator">:</span> <span className="code-string">'Hemanshu Mahajan'</span>,
            <br />  <span className="code-attr">title</span><span className="code-operator">:</span> <span className="code-string">'Aspiring DevOps Engineer'</span>,
            <br />  <span className="code-attr">skills</span><span className="code-operator">:</span> {"["}
            <br />    <span className="code-string">'AWS'</span>, <span className="code-string">'Docker'</span>, <span className="code-string">'Kubernetes'</span>, 
            <br />    <span className="code-string">'Jenkins'</span>, <span className="code-string">'Terraform'</span>, <span className="code-string">'Ansible'</span>,
            <br />    <span className="code-string">'Python'</span>, <span className="code-string">'Linux'</span>, <span className="code-string">'Git'</span>
            <br />  {"]"},
            <br />  <span className="code-attr">hardWorker</span><span className="code-operator">:</span> <span className="code-boolean">true</span>,
            <br />  <span className="code-attr">quickLearner</span><span className="code-operator">:</span> <span className="code-boolean">true</span>,
            <br />  <span className="code-attr">problemSolver</span><span className="code-operator">:</span> <span className="code-boolean">true</span>,
            <br />  <span className="code-attr">hireable</span><span className="code-operator">:</span> <span className="code-function">function</span>() {"{"}
            <br />    <span className="code-tag">return</span> <span className="code-operator">(</span>
            <br />      <span className="code-name">this</span><span className="code-operator">.</span><span className="code-attr">hardWorker</span> <span className="code-operator">&&</span>
            <br />      <span className="code-name">this</span><span className="code-operator">.</span><span className="code-attr">problemSolver</span> <span className="code-operator">&&</span>
            <br />      <span className="code-name">this</span><span className="code-operator">.</span><span className="code-attr">skills</span><span className="code-operator">.</span>length <span className="code-operator">>= 5</span>
            <br />    <span className="code-operator">);</span>
            <br />  {"}"},
            <br />{"}"};
            <br />
            <br /><span className="code-comment">// Is Hemanshu hireable?</span>
            <br /><span className="code-name">console</span><span className="code-operator">.</span><span className="code-function">log</span><span className="code-operator">(</span><span className="code-name">devOpsEngineer</span><span className="code-operator">.</span><span className="code-function">hireable</span><span className="code-operator">()</span><span className="code-operator">)</span><span className="code-operator">;</span> <span className="code-comment">// true</span>
        </pre>
        <div className="flex items-center mt-2">
          <span className="text-green-400 mr-2">➜</span>
          <span className="text-accent1 mr-2">~/portfolio</span>
          <span className="text-white">$</span>
          <span className="ml-2 inline-block h-5 w-2 bg-white/80 animate-blink"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
