import { useQuery } from '@tanstack/react-query'
import * as analyticsService from '../services/analyticsService'

export const useAnalytics = () => {
  const { data: weeklyData, isLoading: weeklyLoading } = useQuery(
    'weeklyAnalytics',
    () => analyticsService.getWeeklyData(),
    {
      refetchOnWindowFocus: false,
    }
  )

  const { data: monthlyData, isLoading: monthlyLoading } = useQuery(
    'monthlyAnalytics',
    () => analyticsService.getMonthlyData(),
    {
      refetchOnWindowFocus: false,
    }
  )

  const { data: habitStats, isLoading: statsLoading } = useQuery(
    'habitStats',
    () => analyticsService.getHabitStats(),
    {
      refetchOnWindowFocus: false,
    }
  )

  const { data: categoryData, isLoading: categoryLoading } = useQuery(
    'categoryData',
    () => analyticsService.getCategoryData(),
    {
      refetchOnWindowFocus: false,
    }
  )

  return {
    weeklyData: weeklyData?.data || [],
    monthlyData: monthlyData?.data || [],
    habitStats: habitStats?.data || {},
    categoryData: categoryData?.data || [],
    loading: weeklyLoading || monthlyLoading || statsLoading || categoryLoading,
  }
}