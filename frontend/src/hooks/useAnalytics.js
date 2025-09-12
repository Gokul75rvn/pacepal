import { useQuery } from '@tanstack/react-query'
import * as analyticsService from '../services/analyticsService'

export const useAnalytics = () => {
  const { data: weeklyData, isLoading: weeklyLoading } = useQuery({
    queryKey: ['weeklyAnalytics'],
    queryFn: () => analyticsService.getWeeklyData(),
    refetchOnWindowFocus: false,
  })

  const { data: monthlyData, isLoading: monthlyLoading } = useQuery({
    queryKey: ['monthlyAnalytics'],
    queryFn: () => analyticsService.getMonthlyData(),
    refetchOnWindowFocus: false,
  })

  const { data: habitStats, isLoading: statsLoading } = useQuery({
    queryKey: ['habitStats'],
    queryFn: () => analyticsService.getHabitStats(),
    refetchOnWindowFocus: false,
  })

  const { data: categoryData, isLoading: categoryLoading } = useQuery({
    queryKey: ['categoryData'],
    queryFn: () => analyticsService.getCategoryData(),
    refetchOnWindowFocus: false,
  })

  return {
    weeklyData: weeklyData?.data || [],
    monthlyData: monthlyData?.data || [],
    habitStats: habitStats?.data || {},
    categoryData: categoryData?.data || [],
    loading: weeklyLoading || monthlyLoading || statsLoading || categoryLoading,
  }
}