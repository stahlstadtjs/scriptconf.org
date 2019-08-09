export function More() {
  return <>
    <style jsx>{`
      .more {
        font-size: 4rem;
        max-width: 55rem;
        margin: 0 auto;
        text-align: center;
        animation: bounce 2s 4;
      }


      @media (max-width: 550px) {
        .more {
          display: none;
        }
      }


      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-30px);
        }
        60% {
          transform: translateY(-15px);
        }
      }
    `}</style>
    <div className="more">👇</div>
  </>
}
