import { Progress, Spin } from 'antd'
import type { SpinSize } from 'antd/lib/spin'
import React, { type ReactNode } from 'react'

interface CustomLoadingProps {
  // 是否显示加载状态
  spinning?: boolean
  // 加载文本
  tip?: string
  // 大小
  size?: SpinSize
  // 延迟显示加载效果的时间（防止闪烁）
  delay?: number
  // 是否全屏
  fullscreen?: boolean
  // 子内容（被包裹的内容）
  children?: ReactNode
  // 是否显示进度条
  showProgress?: boolean
  // 进度百分比（0-100）
  percent?: number
}

/**
 * @description: 基于 Antd Spin 的加载组件
 * @param spinning 是否显示加载状态 true | false
 * @param tip 加载文本
 * @param size 大小 'small' | 'default' | 'large'
 * @param delay 延迟显示加载效果的时间（防止闪烁）
 * @param fullscreen 是否全屏 true | false
 * @param children 子内容（被包裹的内容）
 * @param showProgress 是否显示进度条 true | false
 * @param percent 进度百分比（0-100）
 * @example
 * <CustomLoading />
 */
const CustomLoading: React.FC<CustomLoadingProps> = ({
  spinning = true,
  tip = '',
  size = 'default',
  delay = 200,
  fullscreen = false,
  children,
  showProgress = false,
  percent,
}) => {
  // 如果是全屏模式且没有子内容，直接渲染全屏加载
  if (fullscreen && !children) {
    return (
      <div className="fixed inset-0 z-9999 bg-white/90 backdrop-blur-4px flex-center">
        <div className="flex flex-col items-center gap-4">
          <Spin size={size} tip={tip} spinning={spinning} delay={delay} />
          {showProgress && percent !== undefined && (
            <div className="w-64">
              <Progress percent={percent} size="small" />
            </div>
          )}
        </div>
      </div>
    )
  }

  // 如果有子内容，使用 Spin 包裹子内容
  if (children) {
    const spinElement = (
      <Spin spinning={spinning} tip={tip} size={size} delay={delay}>
        {children}
      </Spin>
    )

    // 如果是全屏模式，在全屏容器中渲染
    if (fullscreen) {
      return (
        <div className="fixed inset-0 z-9999 bg-white/90 backdrop-blur-4px flex-center">
          {spinElement}
        </div>
      )
    }

    // 普通模式，可能需要显示进度条
    if (showProgress && percent !== undefined) {
      return (
        <div className="w-full">
          {spinElement}
          <div className="mt-4">
            <Progress percent={percent} size="small" />
          </div>
        </div>
      )
    }

    return spinElement
  }

  // 没有子内容的普通加载状态
  return (
    <div className="flex flex-col items-center gap-4 p-8 pt-20 min-h-50">
      <Spin size={size} spinning={spinning} delay={delay}>
        <div className="min-h-20 flex items-center justify-center">
          <span className="text-gray-500">{tip}</span>
        </div>
      </Spin>
      {showProgress && percent !== undefined && (
        <div className="w-64">
          <Progress percent={percent} size="small" />
        </div>
      )}
    </div>
  )
}

export default CustomLoading
