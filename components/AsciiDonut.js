import { useEffect, useRef, useState } from "react";

const SHADES = ".,-~:;=!*#$@";
const WIDTH = 60;
const HEIGHT = 30;

export default function AsciiDonut({ className = "" }) {
  const [frame, setFrame] = useState("");
  const aRef = useRef(0);
  const bRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const output = Array(WIDTH * HEIGHT).fill(" ");
      const zBuffer = Array(WIDTH * HEIGHT).fill(0);
      const A = aRef.current;
      const B = bRef.current;

      for (let theta = 0; theta < Math.PI * 2; theta += 0.07) {
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);

        for (let phi = 0; phi < Math.PI * 2; phi += 0.02) {
          const cosPhi = Math.cos(phi);
          const sinPhi = Math.sin(phi);

          const sinA = Math.sin(A);
          const cosA = Math.cos(A);
          const sinB = Math.sin(B);
          const cosB = Math.cos(B);

          const circleX = cosTheta + 2;
          const circleY = sinTheta + 1;
          const invZ = 1 / (sinPhi * circleX * sinA + circleY * cosA + 5);
          const t = sinPhi * circleX * cosA - circleY * sinA;

          const x = Math.floor(WIDTH / 2 + 30 * invZ * (cosPhi * circleX * cosB - t * sinB));
          const y = Math.floor(HEIGHT / 2 + 15 * invZ * (cosPhi * circleX * sinB + t * cosB));

          const idx = x + WIDTH * y;
          const luminance =
            cosPhi * cosTheta * sinB -
            sinPhi * cosTheta * cosB -
            sinTheta * cosB +
            sinPhi * sinTheta * sinB;

          if (y >= 0 && y < HEIGHT && x >= 0 && x < WIDTH && invZ > zBuffer[idx]) {
            zBuffer[idx] = invZ;
            const shadeIndex = Math.max(
              0,
              Math.min(SHADES.length - 1, Math.floor((luminance + 1) * (SHADES.length / 2)))
            );
            output[idx] = SHADES[shadeIndex];
          }
        }
      }

      let frameString = "";
      for (let i = 0; i < WIDTH * HEIGHT; i++) {
        frameString += output[i];
        if ((i + 1) % WIDTH === 0) {
          frameString += "\n";
        }
      }

      aRef.current += 0.04;
      bRef.current += 0.02;
      setFrame(frameString);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre
      className={`whitespace-pre font-mono text-[12px] leading-[13px] text-[#a4ffb8] drop-shadow-[0_0_24px_rgba(76,255,143,0.65)] sm:text-[14px] sm:leading-[16px] ${className}`}
      aria-hidden="true"
    >
      {frame || ""}
    </pre>
  );
}
