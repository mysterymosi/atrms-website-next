'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'

import { Button } from '@/components/Button'

interface CardProps {
  number: string
  title: string
  description: string
  colorTheme?: 'orange' | 'blue' | 'purple'
  className?: string
  rotate?: string
  colors?: {
    bg: string
    text: string
    border: string
  }
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
)

const Card = ({
  number,
  title,
  description,
  colorTheme = 'blue',
  className,
  rotate,
  colors: customColors,
}: CardProps) => {
  const defaultBgColors = {
    orange: 'bg-orange-50',
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
  }
  const defaultTextColors = {
    orange: 'text-orange-500',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
  }
  const defaultBorderColors = {
    orange: 'border-orange-100',
    blue: 'border-blue-100',
    purple: 'border-purple-100',
  }

  const bgColor = customColors?.bg || defaultBgColors[colorTheme]
  const textColor = customColors?.text || defaultTextColors[colorTheme]
  const borderColor = customColors?.border || defaultBorderColors[colorTheme]

  return (
    <div
      className={`relative w-full md:w-[280px] transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="rounded-[25px] border border-neutral-100 bg-supporting p-2 shadow-[0px_10px_20px_0px_#D3D3D3]">
        <Pin className={`z-20 mx-auto mb-6 h-8 w-8 ${textColor}`} />
        <div
          className={`${bgColor} relative flex h-full flex-col overflow-hidden rounded-[15px] border p-[15px] ${borderColor}`}
        >
          <span className={`${textColor} mb-5 font-display text-4xl`}>
            {number}
          </span>
          <h3 className="mb-[10px] text-2xl leading-none font-semibold text-neutral-800">
            {title}
          </h3>
          <p className="text-sm/5 tracking-tight text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export interface Step {
  title: string
  description: string
  colorTheme?: 'orange' | 'blue' | 'purple'
  colors?: {
    bg: string
    text: string
    border: string
  }
}

export interface StepPosition {
  className?: string
  rotate?: string
}

export interface HowItWorksProps {
  features?: Step[]
  className?: string
  stepPositions?: StepPosition[]
}

const PATH_START_Y = 150
const BUTTON_Y = 1180
const BOARD_HEIGHT = 1240

function getPathD(stepCount: number) {
  const segments = [
    'M 290 150 C 500 150, 550 270, 710 270',
    ' C 850 270, 500 350, 290 450',
    ' C 290 600, 550 720, 750 720',
    ' C 620 780, 420 850, 290 850',
  ]
  if (stepCount < 2) return ''
  return `${segments.slice(0, stepCount - 1).join('')} C 300 1000, 420 1140, 500 ${BUTTON_Y}`
}

function ConnectorPath({
  pathD,
  height,
  pathLength,
}: {
  pathD: string
  height: number
  pathLength: MotionValue<number>
}) {
  const endpointOpacity = useTransform(pathLength, [0.82, 0.92], [0, 1])

  return (
    <svg
      className="pointer-events-none absolute top-0 left-0 z-0 hidden h-full w-full overflow-visible md:block"
      viewBox={`0 0 1000 ${height}`}
      preserveAspectRatio="none"
    >
      <path
        d={pathD}
        stroke="currentColor"
        className="text-neutral-200"
        strokeWidth="2"
        strokeDasharray="8 6"
        fill="none"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        d={pathD}
        stroke="currentColor"
        className="text-secondary"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        style={{ pathLength }}
      />
      <motion.circle
        cx="500"
        cy={BUTTON_Y}
        r="4"
        className="fill-secondary"
        style={{ opacity: endpointOpacity }}
      />
    </svg>
  )
}

function PathCta({ pathLength }: { pathLength: MotionValue<number> }) {
  const [arrived, setArrived] = useState(false)

  useEffect(() => {
    setArrived(pathLength.get() >= 0.9)
  }, [pathLength])

  useMotionValueEvent(pathLength, 'change', (value) => {
    setArrived(value >= 0.9)
  })

  const buttonProps = arrived
    ? ({ variant: 'solid', color: 'secondary' } as const)
    : ({ variant: 'outline', color: 'primary' } as const)

  return (
    <motion.div
      className="relative z-20 mx-auto flex justify-center md:absolute md:top-[1160px] md:left-1/2 md:-translate-x-1/2"
      animate={{ scale: arrived ? 1.04 : 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <Button
        href="/register"
        {...buttonProps}
        className="transition-all duration-500"
      >
        Request a Demo
        <span aria-hidden="true" className="ml-2">
          →
        </span>
      </Button>
    </motion.div>
  )
}
const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: 'md:absolute md:top-0 md:left-[15%]', rotate: 'rotate-8' },
  {
    className: 'md:absolute md:top-[120px] md:right-[15%]',
    rotate: '-rotate-8',
  },
  { className: 'md:absolute md:top-[450px] md:left-[15%]', rotate: 'rotate-8' },
  {
    className: 'md:absolute md:top-[570px] md:right-[10%]',
    rotate: '-rotate-8',
  },
  { className: 'md:absolute md:top-[850px] md:left-[15%]', rotate: 'rotate-8' },
]

export default function HowItWorks({
  features,
  className,
  stepPositions,
}: HowItWorksProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const defaultFeatures: Step[] = [
    {
      title: 'Create Account',
      description:
        'Sign up in minutes. Enter your details and verify your email to get started.',
      colorTheme: 'orange',
    },
    {
      title: 'Verify Identity',
      description:
        'Complete your profile verification to ensure secure transactions and compliance.',
      colorTheme: 'blue',
    },
    {
      title: 'Select Plan',
      description:
        'Choose from a variety of investment plans tailored to your financial goals.',
      colorTheme: 'purple',
    },
    {
      title: 'Analyze & Invest',
      description:
        'Review returns and make your first investment with confidence.',
      colorTheme: 'orange',
    },
    {
      title: 'Track Growth',
      description:
        'Monitor your portfolio in real-time and watch your wealth grow over time.',
      colorTheme: 'blue',
    },
  ]

  const data = features && features.length > 0 ? features : defaultFeatures
  const positions = stepPositions || DEFAULT_CARD_POSITIONS
  const pathD = getPathD(data.length)
  const height = data.length >= 5 ? BOARD_HEIGHT : data.length === 1 ? 400 : data.length === 2 ? 450 : data.length === 3 ? 800 : 900

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const drawn = useTransform(
    scrollYProgress,
    [PATH_START_Y / height, BUTTON_Y / height],
    [0, 1],
  )
  const pathLength = useSpring(drawn, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div
      className={`relative bg-supporting px-8 max-md:pt-10 max-md:pb-25 md:py-20 ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          ref={containerRef}
          className="relative mx-auto flex h-auto w-full max-w-[1000px] flex-col space-y-8 md:block md:h-[var(--md-height)] md:space-y-0"
          style={{ '--md-height': `${height}px` } as React.CSSProperties}
        >
          {pathD ? (
            <ConnectorPath
              pathD={pathD}
              height={height}
              pathLength={pathLength}
            />
          ) : null}

          {data.map((step, index) => {
            const position = positions[index % positions.length]

            return (
              <Card
                key={step.title}
                number={`0${index + 1}`}
                title={step.title}
                description={step.description}
                colorTheme={step.colorTheme || 'blue'}
                colors={step.colors}
                rotate={position.rotate}
                className={position.className}
              />
            )
          })}

          <PathCta pathLength={pathLength} />
        </div>
      </div>
    </div>
  )
}
