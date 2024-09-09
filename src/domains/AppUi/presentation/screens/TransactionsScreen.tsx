import { View, Text, StatusBar, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import style from "@/src/shared/styles/global-styles";
import Header from "../components/molecules/sections/Header";
import tStyles from "../styles";
import TransactionCard from "../components/molecules/Cards/TransactionCard";
import { Transaction } from "@/src/shared/contants/types";
import { transactions } from "@/src/shared/contants/data";
import SearchBar from "../components/molecules/TextInputs/SearchBar";
import useStore, { UserState } from "@/src/core/application/state/store";

export default function TransactionsScreen() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<string>("");
  // const transactions = useStore((state: UserState) => state.transactions);
  const [filteredTransactions, setFilteredTransactions] =
    useState<any[]>(transactions);

  const handleSearch = (text: string) => {
    setQuery(text);
    const filtered = transactions.filter((transaction) =>
      transaction.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleDismiss = (id: string) => {
    setFilteredTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };

  const renderSeparator = (week: string) => (
    <View style={tStyles.separator}>
      <Text style={tStyles.separatorText}>{week}</Text>
    </View>
  );

  const groupedTransactions = filteredTransactions.reduce<{
    [key: string]: Transaction[];
  }>((acc, transaction) => {
    if (!acc[transaction.week]) {
      acc[transaction.week] = [];
    }
    acc[transaction.week].push(transaction);
    return acc;
  }, {});

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setFilteredTransactions(transactions);
      setLoading(false);
    }, 2000);
  };

  return (
    <View className="flex-1 bg-primary-background">
      <View className="" style={style.VStack}>
        <Header calendar initial="TO" color="#FFC8DD" title="Transactions" />
        <View className="mt-6">
          <SearchBar query={query} handleSearch={handleSearch} />
          <FlatList
            className="flex-grow"
            showsVerticalScrollIndicator={false}
            data={Object.entries(groupedTransactions)}
            keyExtractor={([week]) => week}
            renderItem={({ item: [week, transactions] }) => (
              <>
                {renderSeparator(week)}
                {transactions.map((transaction) => (
                  <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                    onDismiss={() => handleDismiss(transaction.id)}
                  />
                ))}
              </>
            )}
            ListFooterComponent={() => <View className="h-60 w-full" />}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={handleRefresh}
                tintColor="#FFFFFF" // Change this to any color that contrasts with your background
                colors={["#FFFFFF"]} // For Android, this sets the spinner color
              />
            }
          />
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
